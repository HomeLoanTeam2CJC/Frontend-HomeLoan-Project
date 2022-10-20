import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanagreementformComponent } from './loanagreementform.component';

describe('LoanagreementformComponent', () => {
  let component: LoanagreementformComponent;
  let fixture: ComponentFixture<LoanagreementformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanagreementformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanagreementformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
