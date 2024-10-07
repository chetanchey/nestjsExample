import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getChetan(): string {
    return 'Hello Chetan';
  }
}
