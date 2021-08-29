import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO relay get without anything
  @Get('get-simple')
  getSimple() {}

  // TODO relay get with path param
  @Get('get-path/:id')
  getPath(@Param('id') id: number) {}

  // TODO relay get with query param
  @Get('get-query')
  getQuery(@Query('key') key: string) {}

  // TODO response with server status response
  @Post('post-status')
  postSimple() {}

  // TODO request with request body
  @Post('post-body')
  postBody() {}

  // TODO response with predefined response body
  @Post('post-defined-res')
  postDefinedResponse() {}

  // TODO response with body directly from server
  @Post('post-dynamic-res')
  postDynamicResponse() {}
}
