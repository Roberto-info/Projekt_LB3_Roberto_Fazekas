import { Component, OnInit } from '@angular/core';
import { TicketDTO } from 'src/model/ticketDTO';
import { FormServiceService } from 'src/Services/form-service.service';

@Component({
  selector: 'app-ticketdis',
  templateUrl: './ticketdis.component.html',
  styleUrls: ['./ticketdis.component.css']
})
export class TicketdisComponent implements OnInit {

  tickets: TicketDTO[] = [];

  constructor(private formService: FormServiceService) { }

  ngOnInit(): void {
    let tickets: TicketDTO[] = [];
    this.formService.getTickets().subscribe(t => {
      console.log(t);
      for (let index = 0; index < t.length; index++) {
        this.tickets[index] = t[index];
      }
    });
  }

}
