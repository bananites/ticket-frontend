import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNewListComponent } from './ticket-new-list.component';

describe('TicketNewListComponent', () => {
  let component: TicketNewListComponent;
  let fixture: ComponentFixture<TicketNewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketNewListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
