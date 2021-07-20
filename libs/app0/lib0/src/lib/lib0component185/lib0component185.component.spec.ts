import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component185Component } from './lib0component185.component';

describe('Lib0component185Component', () => {
  let component: Lib0component185Component;
  let fixture: ComponentFixture<Lib0component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
