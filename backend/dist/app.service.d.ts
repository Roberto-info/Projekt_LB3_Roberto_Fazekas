import { Repository } from 'typeorm';
import { TicketDTO } from './DTOS/ticket.dto';
import { Ticket } from './entities/ticket.entity';
export declare class AppService {
    private ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    getAll(): Promise<Ticket[]>;
    createTicket(ticket: TicketDTO): Promise<Ticket>;
}
