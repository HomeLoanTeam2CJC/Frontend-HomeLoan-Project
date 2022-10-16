import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerDefaulterListComponent } from './ledger-defaulter-list.component';

describe('LedgerDefaulterListComponent', () => {
  let component: LedgerDefaulterListComponent;
  let fixture: ComponentFixture<LedgerDefaulterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerDefaulterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerDefaulterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
