import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component31Component } from './lib0-lib2component31.component';

describe('Lib0Lib2component31Component', () => {
  let component: Lib0Lib2component31Component;
  let fixture: ComponentFixture<Lib0Lib2component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
