import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { GetService } from './get.service';
import { PostBodyDto } from '../dto/post.body.dto';
import { PostResDto } from '../dto/post.res.dto';
import { Response } from 'express';
import { PostService } from './post.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly getService: GetService,
    private readonly postService: PostService,
  ) {}

  @Get('get-simple')
  getSimple() {
    this.getService.getSimple();
  }

  @Get('get-path/:id')
  getPath(@Param('id') path: string) {
    this.getService.getPath(path);
  }

  @Get('get-query')
  getQuery(@Query('key') key: string) {
    this.getService.getQuery(key);
  }

  // TODO response with server status response
  @Post('post-status')
  postSimple(@Res() response: Response): PostResDto {
    response.status(HttpStatus.OK).send();
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
