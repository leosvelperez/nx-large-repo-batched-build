import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component86Component } from './lib0-lib2-lib2component86.component';

describe('Lib0Lib2Lib2component86Component', () => {
  let component: Lib0Lib2Lib2component86Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
