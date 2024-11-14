import { IsString } from 'class-validator';

export class Users {
  @IsString()
  id: string;
  @IsString()
  username: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
