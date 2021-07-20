import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component136Component } from './lib0component136.component';

describe('Lib0component136Component', () => {
  let component: Lib0component136Component;
  let fixture: ComponentFixture<Lib0component136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
