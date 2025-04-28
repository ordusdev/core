import { Module } from '@nestjs/common';
import { Controllers } from '.';
import { UsecasesModule } from 'src/domain/usecases/usecases.module';

@Module({
  imports: [UsecasesModule],
  controllers: Controllers,
})
export class ControllersModule {}
