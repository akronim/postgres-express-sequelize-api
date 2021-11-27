import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import fakerStatic from 'faker';
import sinon from 'sinon';
import app from '../src/app';
import { hashPassword } from '../src/utils/auth';
import { getUserService, getUserRepository } from '../src/dependency';
import * as envVars from '../src/settings';

chai.use(sinonChai);

export const { expect } = chai;
export { fakerStatic, sinon };
export { hashPassword };
export const server = supertest.agent(app);
export const { BASE_URL } = envVars;
export { getUserService, getUserRepository };
