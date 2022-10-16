import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmApplicationListComponent } from './am-application-list.component';

describe('AmApplicationListComponent', () => {
  let component: AmApplicationListComponent;
  let fixture: ComponentFixture<AmApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
