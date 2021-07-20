import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component64Component } from './lib0-lib2component64.component';

describe('Lib0Lib2component64Component', () => {
  let component: Lib0Lib2component64Component;
  let fixture: ComponentFixture<Lib0Lib2component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
