import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component139Component } from './lib0-lib2component139.component';

describe('Lib0Lib2component139Component', () => {
  let component: Lib0Lib2component139Component;
  let fixture: ComponentFixture<Lib0Lib2component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});