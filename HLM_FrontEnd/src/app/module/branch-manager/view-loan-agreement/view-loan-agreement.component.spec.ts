import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanAgreementComponent } from './view-loan-agreement.component';

describe('ViewLoanAgreementComponent', () => {
  let component: ViewLoanAgreementComponent;
  let fixture: ComponentFixture<ViewLoanAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
