import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component164Component } from './lib0component164.component';

describe('Lib0component164Component', () => {
  let component: Lib0component164Component;
  let fixture: ComponentFixture<Lib0component164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
