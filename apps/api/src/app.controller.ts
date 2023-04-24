import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    if (!appService) {
      appService = new AppService();
    }
  }

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
