import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component186Component } from './lib1-lib0-lib2component186.component';

describe('Lib1Lib0Lib2component186Component', () => {
  let component: Lib1Lib0Lib2component186Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
