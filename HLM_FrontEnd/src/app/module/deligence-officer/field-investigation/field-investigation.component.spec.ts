import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInvestigationComponent } from './field-investigation.component';

describe('FieldInvestigationComponent', () => {
  let component: FieldInvestigationComponent;
  let fixture: ComponentFixture<FieldInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldInvestigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
