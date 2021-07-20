import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component20Component } from './lib0-lib2-lib2component20.component';

describe('Lib0Lib2Lib2component20Component', () => {
  let component: Lib0Lib2Lib2component20Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
