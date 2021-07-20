import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib2component184Component } from './lib0-lib1-lib2component184.component';

describe('Lib0Lib1Lib2component184Component', () => {
  let component: Lib0Lib1Lib2component184Component;
  let fixture: ComponentFixture<Lib0Lib1Lib2component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib2component184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib2component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
