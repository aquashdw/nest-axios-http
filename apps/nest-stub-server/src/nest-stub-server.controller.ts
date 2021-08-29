import { Controller, Get } from '@nestjs/common';
import { NestStubServerService } from './nest-stub-server.service';

@Controller()
export class NestStubServerController {
  constructor(private readonly nestStubServerService: NestStubServerService) {}

  @Get()
  getHello(): string {
    return this.nestStubServerService.getHello();
  }
}
