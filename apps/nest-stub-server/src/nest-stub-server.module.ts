import { Module } from '@nestjs/common';
import { NestStubServerController } from './nest-stub-server.controller';
import { NestStubServerService } from './nest-stub-server.service';

@Module({
  imports: [],
  controllers: [NestStubServerController],
  providers: [NestStubServerService],
})
export class NestStubServerModule {}
