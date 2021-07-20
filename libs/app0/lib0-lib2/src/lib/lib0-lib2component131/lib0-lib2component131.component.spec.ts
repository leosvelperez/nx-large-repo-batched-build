import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component131Component } from './lib0-lib2component131.component';

describe('Lib0Lib2component131Component', () => {
  let component: Lib0Lib2component131Component;
  let fixture: ComponentFixture<Lib0Lib2component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
