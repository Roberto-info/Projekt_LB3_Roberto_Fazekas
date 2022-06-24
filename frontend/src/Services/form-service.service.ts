import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketDTO } from 'src/model/ticketDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  
  

  constructor(private httpClient: HttpClient) { }

  createTicket(name: string, date: string, beschreibung: string) {
    const ticketDTO: TicketDTO = {
      name: name,
      date: date,
      beschreibung: beschreibung
    };
    
    return this.httpClient.post<TicketDTO>('http://localhost:3000/tickets', ticketDTO);
  }

  getTickets() {
    return this.httpClient.get<TicketDTO[]>('http://localhost:3000/tickets')
  }
}


