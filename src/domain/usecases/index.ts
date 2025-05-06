import {
  CreateOneUserUsecase,
  GetManyUsersUsecase,
  VerifyUsernameUserUsecase,
} from './users';

const Usecases = [
  {
    provide: CreateOneUserUsecase.name,
    useClass: CreateOneUserUsecase,
  },
  {
    provide: VerifyUsernameUserUsecase.name,
    useClass: VerifyUsernameUserUsecase,
  },
  {
    provide: GetManyUsersUsecase.name,
    useClass: GetManyUsersUsecase,
  },
];

export { Usecases };
