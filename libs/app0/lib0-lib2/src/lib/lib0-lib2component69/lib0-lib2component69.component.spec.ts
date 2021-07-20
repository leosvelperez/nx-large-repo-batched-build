import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component69Component } from './lib0-lib2component69.component';

describe('Lib0Lib2component69Component', () => {
  let component: Lib0Lib2component69Component;
  let fixture: ComponentFixture<Lib0Lib2component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
