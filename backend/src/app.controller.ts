import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TicketDTO } from './DTOS/ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Controller('tickets')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  async createTicket(@Body('name') name:string, @Body('date') date:string, @Body('beschreibung') beschreibung:string) {
    return await this.appService.createTicket({name, date, beschreibung});
  }

  @Get()
  async getAll() {
    return await this.appService.getAll();
  }
}
