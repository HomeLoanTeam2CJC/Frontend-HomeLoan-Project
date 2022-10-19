import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionletterformComponent } from './sanctionletterform.component';

describe('SanctionletterformComponent', () => {
  let component: SanctionletterformComponent;
  let fixture: ComponentFixture<SanctionletterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionletterformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionletterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
