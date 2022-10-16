import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCheckComponent } from './financial-check.component';

describe('FinancialCheckComponent', () => {
  let component: FinancialCheckComponent;
  let fixture: ComponentFixture<FinancialCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
