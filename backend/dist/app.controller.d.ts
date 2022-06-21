import { AppService } from './app.service';
import { Ticket } from './entities/ticket.entity';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createTicket(name: string, date: string, beschreibung: string): Promise<Ticket>;
    getAll(): Promise<Ticket[]>;
}
