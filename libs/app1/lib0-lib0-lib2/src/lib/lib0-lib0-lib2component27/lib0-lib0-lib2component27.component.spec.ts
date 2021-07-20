import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component27Component } from './lib0-lib0-lib2component27.component';

describe('Lib0Lib0Lib2component27Component', () => {
  let component: Lib0Lib0Lib2component27Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
