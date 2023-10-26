import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (!process.env.CORS_ORIGIN) {
    throw new Error('CORS_ORIGIN env variable not set');
  }
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
  });
  await app.listen(5555);
}
bootstrap();
