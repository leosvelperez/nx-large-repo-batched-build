import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component5Component } from './lib0-lib0-lib2component5.component';

describe('Lib0Lib0Lib2component5Component', () => {
  let component: Lib0Lib0Lib2component5Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
