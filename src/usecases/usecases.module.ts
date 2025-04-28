import { Module } from '@nestjs/common';
import { Usecases } from '.';

@Module({
  imports: [],
  providers: Usecases,
})
export class UsecasesModule {}
