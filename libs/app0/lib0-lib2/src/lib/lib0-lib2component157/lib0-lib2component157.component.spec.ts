import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component157Component } from './lib0-lib2component157.component';

describe('Lib0Lib2component157Component', () => {
  let component: Lib0Lib2component157Component;
  let fixture: ComponentFixture<Lib0Lib2component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
