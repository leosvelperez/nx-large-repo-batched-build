import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component144Component } from './lib0component144.component';

describe('Lib0component144Component', () => {
  let component: Lib0component144Component;
  let fixture: ComponentFixture<Lib0component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
