import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserRepository } from './user.repository';
const users: UserDto[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@test.com',
    password: 'abc123@DEF',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    username: 'janedoe',
    email: 'janedoe@test.com',
    password: 'abc123@DEF',
  },
];

@Injectable()
export class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(createUserDto: CreateUserDto) {
    await this.userRepository.save(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(username: string): UserDto {
    const oneUser = users.find((user) => user.username === username);
    return oneUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
