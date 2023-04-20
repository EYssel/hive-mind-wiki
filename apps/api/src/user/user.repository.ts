import { CreateUserDto } from './dto/create-user.dto';

export class UserRepository {
  async save(createUserDto: CreateUserDto) {
    throw new Error('Method not implemented.');
  }
}
