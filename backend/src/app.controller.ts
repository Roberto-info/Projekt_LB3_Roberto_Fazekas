import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { TicketDTO } from './DTOS/ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Controller('tickets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBody({description: "body:TicketDTO", type:TicketDTO})
  @Post()
  @ApiOkResponse({ description: 'Sends back a TicketDTO', type: TicketDTO})
  async createTicket(@Body('name') name:string, @Body('date') date:string, @Body('beschreibung') beschreibung:string) {
    return await this.appService.createTicket({name, date, beschreibung});
  }

  @Get()
  @ApiOkResponse({
    description: 'creates ticket Objects', type: [TicketDTO],
  })
  async getAll() {
    return await this.appService.getAll();
  }
}
