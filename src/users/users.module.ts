import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Guests } from './entities/guests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Guests])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
