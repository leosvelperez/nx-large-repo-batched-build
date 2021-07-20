import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component192Component } from './lib0component192.component';

describe('Lib0component192Component', () => {
  let component: Lib0component192Component;
  let fixture: ComponentFixture<Lib0component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
