import { Module } from '@nestjs/common';
import { ControllersModule } from 'src/infra/http/controllers/controllers.module';

@Module({
  imports: [ControllersModule],
})
export class AppModule {}
