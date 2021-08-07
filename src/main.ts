import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config'
import { SERVER_PORT } from './config/constents';
import { Logger } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const consigService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const port = +consigService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);

  logger.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();

