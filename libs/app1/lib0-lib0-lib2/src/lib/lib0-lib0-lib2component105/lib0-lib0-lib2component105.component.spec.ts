import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component105Component } from './lib0-lib0-lib2component105.component';

describe('Lib0Lib0Lib2component105Component', () => {
  let component: Lib0Lib0Lib2component105Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
