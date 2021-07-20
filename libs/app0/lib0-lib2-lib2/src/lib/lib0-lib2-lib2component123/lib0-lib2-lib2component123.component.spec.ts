import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component123Component } from './lib0-lib2-lib2component123.component';

describe('Lib0Lib2Lib2component123Component', () => {
  let component: Lib0Lib2Lib2component123Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
