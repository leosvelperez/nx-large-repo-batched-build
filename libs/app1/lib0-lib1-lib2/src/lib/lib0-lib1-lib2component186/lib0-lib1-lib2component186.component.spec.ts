import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib2component186Component } from './lib0-lib1-lib2component186.component';

describe('Lib0Lib1Lib2component186Component', () => {
  let component: Lib0Lib1Lib2component186Component;
  let fixture: ComponentFixture<Lib0Lib1Lib2component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib2component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib2component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});