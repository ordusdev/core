import { EntitiesModule } from 'src/domain/entities/entities.module';
import { Module } from '@nestjs/common';
import { Usecases } from '.';
import { PrismaRepositoriesModule } from 'src/infra/conn/prisma/repositories/repositories.module';

@Module({
  imports: [EntitiesModule, PrismaRepositoriesModule],
  providers: Usecases,
  exports: Usecases,
})
export class UsecasesModule {}
