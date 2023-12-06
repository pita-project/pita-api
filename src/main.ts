import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/http-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Pipe to transform variable with the good type
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      skipUndefinedProperties: true,
    }),
  );

  // Security
  app.enableCors({ origin: process.env.APP_URL, credentials: true });
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  app.disable('x-powered-by');

  // Use HttpExceptionFilter to handle exceptions globally
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
