import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component193Component } from './lib0component193.component';

describe('Lib0component193Component', () => {
  let component: Lib0component193Component;
  let fixture: ComponentFixture<Lib0component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
