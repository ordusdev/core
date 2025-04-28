import { CreateOneUserUsecase } from './users';

const Usecases = [
  {
    provide: CreateOneUserUsecase.name,
    useClass: CreateOneUserUsecase,
  },
];

export { Usecases };
