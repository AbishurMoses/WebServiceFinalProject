import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // http://localhost:3000/hey/Abishur/Moses
  @Get("/hey/:fname/:lname")
  getName(@Param('fname') fname: string, @Param('lname') lname: string): string {
    return this.appService.getHey(fname, lname)
  }

  // http://localhost:3000/queryhi?fname=Abishur&lname=Moses
  @Get("/queryHi")
  queryhi(@Query('fname') fname: string, @Query('lname') lname: string): string {
    // return this.appService.getHey(fname, lname);
    return "FIXME!"
  }

  // http://localhost:3000 sending values through JSON in Insomnia
  @Post()
  addNewName(@Body() body: any): string {
    const {fname, lname} = body
    return this.appService.getHey(fname, lname)
  }
}
