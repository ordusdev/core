import {
  USERS_REPOSITORY,
  UsersRepository,
} from 'src/domain/repositories/users.repository.interface';
import { UserEntity } from './user.entity';

const Entities = [
  {
    provide: UserEntity,
    useFactory: (usersRepository: UsersRepository) => {
      return new UserEntity(usersRepository);
    },
    inject: [USERS_REPOSITORY],
  },
];

export { Entities };
