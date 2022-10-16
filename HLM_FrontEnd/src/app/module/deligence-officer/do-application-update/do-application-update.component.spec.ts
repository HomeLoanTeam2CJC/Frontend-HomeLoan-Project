import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoApplicationUpdateComponent } from './do-application-update.component';

describe('DoApplicationUpdateComponent', () => {
  let component: DoApplicationUpdateComponent;
  let fixture: ComponentFixture<DoApplicationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoApplicationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoApplicationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
