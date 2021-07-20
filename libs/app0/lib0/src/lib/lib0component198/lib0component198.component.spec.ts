import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component198Component } from './lib0component198.component';

describe('Lib0component198Component', () => {
  let component: Lib0component198Component;
  let fixture: ComponentFixture<Lib0component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
