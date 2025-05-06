import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionHandler } from 'src/domain/exceptions/handler';

async function tryListen(app, port: number): Promise<number> {
  try {
    await app.listen(port);
    return port;
  } catch (error: any) {
    if (error.code === 'EADDRINUSE') {
      return tryListen(app, port + 1);
    } else {
      throw error;
    }
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionHandler());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const initialPort = Number(process.env.PORT) || 3000;
  const port = await tryListen(app, initialPort);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
