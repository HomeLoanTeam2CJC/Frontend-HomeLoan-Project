import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSanctionLetterComponent } from './view-sanction-letter.component';

describe('ViewSanctionLetterComponent', () => {
  let component: ViewSanctionLetterComponent;
  let fixture: ComponentFixture<ViewSanctionLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSanctionLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSanctionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
