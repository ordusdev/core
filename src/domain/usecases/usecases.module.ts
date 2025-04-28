import { Module } from '@nestjs/common';
import { Usecases } from '.';
import { PrismaRepositoriesModule } from 'src/infra/conn/prisma/repositories/repositories.module';

@Module({
  imports: [PrismaRepositoriesModule],
  providers: Usecases,
  exports: Usecases,
})
export class UsecasesModule {}
