import { UserModel } from 'src/domain/models/user.model';
import { DomainRepository } from './repository.interface';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export interface UsersRepository extends DomainRepository<UserModel> {
  findOneByEmail(email: string): Promise<UserModel | null>;
  findOneByUsername(username: string): Promise<UserModel | null>;
}
