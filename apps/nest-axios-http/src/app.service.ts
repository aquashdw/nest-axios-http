import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private httpService: HttpService) {}

  private observer = {
    next: (value: AxiosResponse) => {
      this.logger.log(`data: ${value.data}`);
      this.logger.log(`status: ${value.status}`);
      this.logger.log(`statusText: ${value.statusText}`);

      this.logger.debug('# headers: ');
      for (const key of Object.keys(value.headers)) {
        this.logger.debug(`${key}: ${value.headers[key]}`);
      }
      this.logger.debug('end headers #');
    },
    error: (reason) => {
      this.logger.error(reason);
    },
    complete: () => {
      this.logger.log('complete called from observable');
    },
  };

  getSimple() {
    this.httpService
      .get('http://localhost:3001/get-simple')
      .subscribe(this.observer);
  }

  getPath(path: string) {
    this.httpService
      .get(`http://localhost:3001/get-path/${path}`)
      .subscribe(this.observer);
  }

  getQuery(query: string) {
    this.httpService
      .get('http://localhost:3001/get-query', {
        params: {
          key: query,
        },
      })
      .subscribe(this.observer);
  }
}
