import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPdfSanctionLetterComponent } from './email-pdf-sanction-letter.component';

describe('EmailPdfSanctionLetterComponent', () => {
  let component: EmailPdfSanctionLetterComponent;
  let fixture: ComponentFixture<EmailPdfSanctionLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPdfSanctionLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPdfSanctionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
