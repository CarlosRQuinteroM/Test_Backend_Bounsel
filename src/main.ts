import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config'
import { SERVER_PORT } from './config/constents';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const consigService = app.get(ConfigService);

  const port = +consigService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
   console.log(`listening on port ${await app.getUrl()}`)
}
bootstrap();
