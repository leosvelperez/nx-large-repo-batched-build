import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component155Component } from './lib0-lib3-lib2component155.component';

describe('Lib0Lib3Lib2component155Component', () => {
  let component: Lib0Lib3Lib2component155Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});