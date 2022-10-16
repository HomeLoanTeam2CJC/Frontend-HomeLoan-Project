import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerTotalListComponent } from './ledger-total-list.component';

describe('LedgerTotalListComponent', () => {
  let component: LedgerTotalListComponent;
  let fixture: ComponentFixture<LedgerTotalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerTotalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerTotalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
