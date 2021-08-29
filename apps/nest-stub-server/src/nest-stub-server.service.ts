import { Injectable } from '@nestjs/common';

@Injectable()
export class NestStubServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
