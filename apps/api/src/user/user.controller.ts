import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { User, UserKey } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Body() userKey: UserKey) {
    return this.userService.findOne(userKey);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Body() userKey: UserKey) {
    return this.userService.delete(userKey);
  }
}
