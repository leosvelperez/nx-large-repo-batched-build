import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component187Component } from './lib0component187.component';

describe('Lib0component187Component', () => {
  let component: Lib0component187Component;
  let fixture: ComponentFixture<Lib0component187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
