import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketdisComponent } from './ticketdis.component';

describe('TicketdisComponent', () => {
  let component: TicketdisComponent;
  let fixture: ComponentFixture<TicketdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketdisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
