import Model from './models/model';
import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';
import { User } from './models';

const userModel = new Model(User);
export const userRepository = new UserRepository(userModel);
export const userService = new UserService(userRepository);

export const getUserRepository = () => new UserRepository(new Model(User));
export const getUserService = () => new UserService(new UserRepository(new Model(User)));
