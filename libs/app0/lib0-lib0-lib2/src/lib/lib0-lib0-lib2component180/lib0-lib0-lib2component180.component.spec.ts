import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component180Component } from './lib0-lib0-lib2component180.component';

describe('Lib0Lib0Lib2component180Component', () => {
  let component: Lib0Lib0Lib2component180Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
