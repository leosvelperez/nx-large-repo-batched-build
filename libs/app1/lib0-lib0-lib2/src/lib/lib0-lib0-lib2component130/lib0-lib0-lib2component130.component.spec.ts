import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component130Component } from './lib0-lib0-lib2component130.component';

describe('Lib0Lib0Lib2component130Component', () => {
  let component: Lib0Lib0Lib2component130Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});