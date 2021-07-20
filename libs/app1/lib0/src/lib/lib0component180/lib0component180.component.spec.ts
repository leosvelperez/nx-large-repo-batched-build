import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component180Component } from './lib0component180.component';

describe('Lib0component180Component', () => {
  let component: Lib0component180Component;
  let fixture: ComponentFixture<Lib0component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
