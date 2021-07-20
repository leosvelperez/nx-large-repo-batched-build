import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component197Component } from './lib0-lib2component197.component';

describe('Lib0Lib2component197Component', () => {
  let component: Lib0Lib2component197Component;
  let fixture: ComponentFixture<Lib0Lib2component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
