import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entities';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 'some-uuid',
      username: 'shobhit',
      email: 'shobhit99@gmail.com',
      password: '1234',
    },
  ];

  // Get user data by email
  getUserByEmail(email: string): Users | undefined {
    return this.users.find((user) => user.email === email);
  }

  // Get user data by ID
  getUserById(id: string): Users | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Add new user data
  addUser(newUser: Users): Users {
    this.users.push(newUser);
    return newUser;
  }

  // Update user data by ID
  updateUser(id: string, updatedData: Partial<Users>): Users {
    const user = this.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    Object.assign(user, updatedData); // update only provided fields
    return user;
  }

  // Delete user data by ID
  deleteUser(id: string): string {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(index, 1);
    return `User with ID ${id} has been deleted`;
  }
}
