import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoApplicationListComponent } from './do-application-list.component';

describe('DoApplicationListComponent', () => {
  let component: DoApplicationListComponent;
  let fixture: ComponentFixture<DoApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
