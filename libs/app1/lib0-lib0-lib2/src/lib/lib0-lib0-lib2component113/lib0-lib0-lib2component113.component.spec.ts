import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component113Component } from './lib0-lib0-lib2component113.component';

describe('Lib0Lib0Lib2component113Component', () => {
  let component: Lib0Lib0Lib2component113Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
