import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmApplicationUpdateComponent } from './bm-application-update.component';

describe('BmApplicationUpdateComponent', () => {
  let component: BmApplicationUpdateComponent;
  let fixture: ComponentFixture<BmApplicationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmApplicationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmApplicationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
