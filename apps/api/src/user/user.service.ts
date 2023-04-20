import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { User, UserKey } from './user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  userRepository: UserRepository;

  constructor(
    @InjectModel('User')
    private userModel: Model<User, UserKey>,
  ) {
    this.userRepository = new UserRepository();
  }

  create(user: User) {
    return this.userModel.create(user);
  }

  update(key: UserKey, user: Partial<User>) {
    return this.userModel.update(key, user);
  }

  delete(key: UserKey) {
    return this.userModel.update(key, { deletedAt: new Date() });
  }

  findOne(key: UserKey) {
    return this.userModel.get(key);
  }

  findAll() {
    return this.userModel.scan().exec();
  }
}
