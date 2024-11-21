import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from 'swagger-host';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app, { endpoint: '/.well-known/swagger', file: 'swagger.yaml' });
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
