import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib2component92Component } from './lib0-lib0-lib2component92.component';

describe('Lib0Lib0Lib2component92Component', () => {
  let component: Lib0Lib0Lib2component92Component;
  let fixture: ComponentFixture<Lib0Lib0Lib2component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib2component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib2component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
