import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcDefaulterListComponent } from './tc-defaulter-list.component';

describe('TcDefaulterListComponent', () => {
  let component: TcDefaulterListComponent;
  let fixture: ComponentFixture<TcDefaulterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcDefaulterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcDefaulterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
