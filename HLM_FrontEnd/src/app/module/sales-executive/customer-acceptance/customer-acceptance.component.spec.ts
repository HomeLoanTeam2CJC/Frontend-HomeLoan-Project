import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAcceptanceComponent } from './customer-acceptance.component';

describe('CustomerAcceptanceComponent', () => {
  let component: CustomerAcceptanceComponent;
  let fixture: ComponentFixture<CustomerAcceptanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAcceptanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
