import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setSwaggerDocumentConfig } from './config/swagger'
import { Log4jsLogger } from '@nestx-log4js/core'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  setSwaggerDocumentConfig(app)
  app.useLogger(app.get(Log4jsLogger))
  await app.listen(3000);
}
bootstrap();
