import { Module } from '@nestjs/common';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [UsecasesModule],
})
export class AppModule {}
