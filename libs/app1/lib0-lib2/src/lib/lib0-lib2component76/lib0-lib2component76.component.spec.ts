import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component76Component } from './lib0-lib2component76.component';

describe('Lib0Lib2component76Component', () => {
  let component: Lib0Lib2component76Component;
  let fixture: ComponentFixture<Lib0Lib2component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
