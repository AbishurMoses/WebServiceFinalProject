import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHey(fname: string, lname: string): string {
    return `Hey there ${fname} ${lname}!`
  }
}
