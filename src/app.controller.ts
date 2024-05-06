import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//dacoreters, aplicado num método, ele é uma função que recebe algo como parametro, e decolve algo
export class AppController { //passa essa clase como parametro
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
