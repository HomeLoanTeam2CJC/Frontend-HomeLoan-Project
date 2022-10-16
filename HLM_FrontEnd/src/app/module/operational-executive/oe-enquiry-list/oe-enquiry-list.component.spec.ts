import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeEnquiryListComponent } from './oe-enquiry-list.component';

describe('OeEnquiryListComponent', () => {
  let component: OeEnquiryListComponent;
  let fixture: ComponentFixture<OeEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeEnquiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OeEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
