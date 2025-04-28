import { IsEmail, Matches } from 'class-validator';
import { Model } from './model';

export class UserModel extends Model {
  @IsEmail()
  email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Username must be alphanumeric and contain at least 8 characters.',
  })
  username: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Password must be alphanumeric and contain at least 8 characters.',
  })
  password: string;

  constructor(data: Partial<UserModel>, id?: string) {
    super(data, id);
    Object.assign(this, data);
  }
}
