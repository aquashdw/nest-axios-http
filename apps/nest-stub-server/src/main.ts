import { NestFactory } from '@nestjs/core';
import { NestStubServerModule } from './nest-stub-server.module';

async function bootstrap() {
  const app = await NestFactory.create(NestStubServerModule);
  await app.listen(3001);
}
bootstrap();
