import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { workerData } from 'worker_threads';
import { TicketDTO } from './DTOS/ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class AppService {
  

  constructor(@InjectRepository(Ticket) private ticketRepository: Repository<Ticket>) {

  }

  getAll(): Promise<Ticket[]>{
    return this.ticketRepository.find();
  }

  async createTicket(ticket: TicketDTO) {
    const newTicket = this.ticketRepository.create(ticket);
    return this.ticketRepository.save(newTicket);
  }
}
