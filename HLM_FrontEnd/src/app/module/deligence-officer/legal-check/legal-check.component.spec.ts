import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCheckComponent } from './legal-check.component';

describe('LegalCheckComponent', () => {
  let component: LegalCheckComponent;
  let fixture: ComponentFixture<LegalCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
