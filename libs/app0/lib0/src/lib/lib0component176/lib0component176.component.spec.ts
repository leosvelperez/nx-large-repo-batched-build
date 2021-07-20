import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component176Component } from './lib0component176.component';

describe('Lib0component176Component', () => {
  let component: Lib0component176Component;
  let fixture: ComponentFixture<Lib0component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
