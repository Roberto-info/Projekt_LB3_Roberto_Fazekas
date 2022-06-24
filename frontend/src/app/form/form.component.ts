import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultService } from 'src/api/default.service';
import { TicketDTO } from 'src/model/ticketDTO';
import { FormServiceService } from 'src/Services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  ticket: TicketDTO | undefined;

  constructor(private formService: FormServiceService, private defaultService: DefaultService) { }

  ngOnInit(): void {
    
  }

  async onSubmit(formData: any){
    await this.formService.createTicket(formData.name, formData.date, formData.beschreibung).subscribe(t => {
      const ticket: TicketDTO = {
        name: t.name,
        date: t.date,
        beschreibung: t.beschreibung
      }
      this.ticket = ticket;
    });
  }

}
