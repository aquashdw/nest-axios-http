import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GetService } from './get.service';
import { HttpModule } from '@nestjs/axios';
import { PostService } from './post.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [GetService, PostService],
})
export class AppModule {}
