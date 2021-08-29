import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PostBodyDto } from '../dto/post.body.dto';
import { PostResDto } from '../dto/post.res.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO relay get without anything
  @Get('get-simple')
  getSimple() {}

  // TODO relay get with path param
  @Get('get-path/:id')
  getPath(@Param('id') path: number) {}

  // TODO relay get with query param
  @Get('get-query')
  getQuery(@Query('key') key: string) {}

  // TODO response with server status response
  @Post('post-status')
  postSimple(): PostResDto {
    return null;
  }

  // TODO request with request body
  @Post('post-body')
  postBody(@Body() dto: PostBodyDto) {
    return null;
  }

  // TODO response with predefined response body
  @Post('post-defined-res')
  postDefinedResponse(@Body() dto: PostBodyDto): PostResDto {
    return null;
  }

  // TODO response with body directly from server
  @Post('post-dynamic-res')
  postDynamicResponse(@Body() dto: PostBodyDto): any {
    return null;
  }
}
