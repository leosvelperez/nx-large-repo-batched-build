import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component177Component } from './lib0component177.component';

describe('Lib0component177Component', () => {
  let component: Lib0component177Component;
  let fixture: ComponentFixture<Lib0component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
