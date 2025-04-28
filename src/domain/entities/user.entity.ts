import { UserModel } from 'src/domain/models/user.model';
import { UsersRepository } from 'src/domain/repositories/users.repository.interface';
import { Entity } from './entity';

export class UserEntity extends Entity<UserModel> {
  protected repository: UsersRepository;

  async getOneByEmail(email: string): Promise<UserModel | null> {
    return this.repository.findOneByEmail(email);
  }

  async getOneByUsername(username: string): Promise<UserModel | null> {
    return this.repository.findOneByUsername(username);
  }
}
