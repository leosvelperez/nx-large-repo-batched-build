import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component63Component } from './lib0-lib2component63.component';

describe('Lib0Lib2component63Component', () => {
  let component: Lib0Lib2component63Component;
  let fixture: ComponentFixture<Lib0Lib2component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});