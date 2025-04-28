import { USERS_REPOSITORY } from 'src/domain/repositories/users.repository.interface';
import { UsersPrismaRepository } from './users.prismaRepository';

const PrismaRepositories = [
  {
    provide: USERS_REPOSITORY,
    useClass: UsersPrismaRepository,
  },
];

export { PrismaRepositories };
