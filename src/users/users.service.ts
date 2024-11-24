import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { weworkLogger } from 'wework-logger';

const logger = weworkLogger(
  { logToConsole: true, level: 'debug' },
  {
    app: { name: 'Nest-initial-app', version: '1.0.0' },
    deployInfo: { env: 'local' },
  },
);
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  // Get user data by email
  async getUserByEmail(email: string): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { email } });
    console.log(`user ${JSON.stringify(user)}`);
    logger.important(`user ${JSON.stringify(user)}`);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  // Get user data by ID
  async getUserById(id: string): Promise<Users> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Add new user data
  async addUser(newUser: Partial<Users>): Promise<Users> {
    const createdUser = this.usersRepository.create(newUser); // Creates an entity instance
    return await this.usersRepository.save(createdUser); // Saves to the databa se it is a promise
  }

  // Update user data by ID
  async updateUser(id: string, updatedData: Partial<Users>): Promise<Users> {
    const user = await this.usersRepository.preload({ id: id, ...updatedData });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return await this.usersRepository.save(user); // Persist changes to the database
  }

  // Delete user data by ID
  async deleteUser(id: string): Promise<string> {
    const user = await this.getUserById(id); // Ensure user exists
    await this.usersRepository.remove(user); // Remove the user from the database
    return `User with ID ${id} has been deleted`;
  }
}
