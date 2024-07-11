import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketUnassingedComponent } from './ticket-unassinged.component';

describe('TicketUnassingedComponent', () => {
  let component: TicketUnassingedComponent;
  let fixture: ComponentFixture<TicketUnassingedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketUnassingedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketUnassingedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
