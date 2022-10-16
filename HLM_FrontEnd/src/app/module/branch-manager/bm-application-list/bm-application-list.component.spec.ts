import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmApplicationListComponent } from './bm-application-list.component';

describe('BmApplicationListComponent', () => {
  let component: BmApplicationListComponent;
  let fixture: ComponentFixture<BmApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
