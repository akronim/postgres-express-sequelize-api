const Sequelize = require('sequelize');

const { Op } = Sequelize;

export const buildCondition = ({
  column,
  columnDataType,
  operation,
  filterValue,
}) => {
  let value = filterValue;

  let op = null;

  let condition = null;

  const generalOperations = {
    eq: { [Op.eq]: value },
    gt: { [Op.gt]: value },
    lt: { [Op.lt]: value },
    gte: { [Op.gte]: value },
    lte: { [Op.lte]: value },
  };

  const textOperations = {
    contains: { [Op.like]: `%${value}%` },
    startsWith: { [Op.startsWith]: value },
    endsWith: { [Op.endsWith]: value },
    eq: { [Op.eq]: value },
  };

  if (columnDataType === 'text') {
    value = filterValue.trim().toLowerCase();
    op = textOperations[operation];

    if (op) {
      condition = { [column]: op };
    }

    return condition;
  }

  op = generalOperations[operation];

  if (op) {
    condition = { [column]: op };
  }

  return condition;
};

export const buildFilterQuery = (options) => {
  let filterQuery = null;

  if (options.where) {
    const conditions = [];

    options.where.forEach((filter) => {
      const condition = buildCondition(filter);
      if (condition) {
        conditions.push(condition);
      }
    });

    if (conditions.length > 1) {
      filterQuery = { [Op.and]: conditions };
    } else if (conditions.length === 1) {
      filterQuery = conditions.shift();
    }
  }

  return filterQuery;
};

export const buildSortQuery = (options) => {
  let sortQuery = null;

  if (options.sort) {
    const { column, direction } = options.sort;
    sortQuery = [ [ column, direction ] ];
  }

  return sortQuery;
};

const getOffset = (currentPage = 1, limit) => (currentPage - 1) * [ limit ];

export const getTotalPages = (totalCount, limit) => Math.ceil(totalCount / limit);

export const buildPaginationQuery = (options) => {
  let paginationQuery = null;

  if (options.pagination) {
    const { page, limit } = options.pagination;

    const offset = getOffset(page, limit);

    paginationQuery = { offset, limit, page };
  }

  return paginationQuery;
};
