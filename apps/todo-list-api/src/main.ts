import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import AppModule from './app.module';
import { DESCRIPTION, PORT, PREFIX, TITLE, VERSION } from './utils/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle(TITLE).setDescription(DESCRIPTION).setVersion(VERSION).build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(PREFIX, app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(PREFIX);
  app.enableCors();

  await app.listen(PORT);
}

bootstrap().catch((err: Error) => {
  throw new Error(err.message);
});
