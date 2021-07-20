import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component195Component } from './lib0component195.component';

describe('Lib0component195Component', () => {
  let component: Lib0component195Component;
  let fixture: ComponentFixture<Lib0component195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
