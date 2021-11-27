import {
  buildFilterQuery, buildPaginationQuery, buildSortQuery
} from '../db/queryHelper';
import db from '../models';

class GenericRepository {
  constructor(model) {
    if (!model) {
      throw (new Error('No model provided to GenericRepository!'));
    }
    this.model = model;
  }

  async count(options) {
    let count = null;

    let query = null;

    if (options) {
      query = buildFilterQuery(options);
    }

    if (query) {
      count = await this.model.entity.count({ where: query });
    } else {
      count = await this.model.entity.count();
    }

    return count;
  }

  async find(options) {
    let data = null;

    let filterQuery = null;
    let sortQuery = null;
    let paginationQuery = null;

    if (options) {
      filterQuery = buildFilterQuery(options);
      sortQuery = buildSortQuery(options);
      paginationQuery = buildPaginationQuery(options);
    }

    data = await this.model.entity.findAndCountAll({
      where: filterQuery,
      order: sortQuery,
      limit: paginationQuery ? paginationQuery.limit : null,
      offset: paginationQuery ? paginationQuery.offset : null
    });

    return data;
  }

  // async findById(options) {
  //   const { value, column, include } = options;

  //   const record = await this.model.entity.findOne({
  //     where: { [column]: value },
  //     include: include || null,
  //   });

  //   return record;
  // }

  async findById(value, column) {
    const record = await this.model.entity.findOne({
      where: { [column]: value },
      // include: 'posts',
    });

    return record;
  }

  async create(entity) {
    return this.model.entity.create(entity);
  }

  async updateById(idValue, idColumn, entity) {
    const recordToUpdate = await this.model.entity.findOne({ where: { [idColumn]: idValue } });

    if (!recordToUpdate) {
      return null;
    }

    Object.entries(entity).forEach(([ key, value ]/* , index */) => {
      recordToUpdate[key] = value;
    });

    await recordToUpdate.save();

    return recordToUpdate;
  }

  async deleteById(idValue, idColumn) {
    return this.model.entity.destroy({ where: { [idColumn]: idValue } });
  }

  // eslint-disable-next-line class-methods-use-this
  async executeRawQuery(query, replacements, queryType) {
    return db.sequelize.query(query, {
      replacements: replacements || null,
      type: db.sequelize.QueryTypes[queryType]
    });
  }
}

export default GenericRepository;
