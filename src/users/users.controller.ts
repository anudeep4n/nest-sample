import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/get-data')
  getWeWork(@Query('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Get(':id')
  getDataById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  // Users will have type safety
  @Post()
  addData(@Body() newUser: Users) {
    return this.userService.addUser(newUser);
  }

  @Patch(':id')
  updateData(@Param('id') id: string, @Body() updatedData: Partial<Users>) {
    return this.userService.updateUser(id, updatedData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
