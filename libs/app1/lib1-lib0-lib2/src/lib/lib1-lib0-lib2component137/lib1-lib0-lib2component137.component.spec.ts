import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component137Component } from './lib1-lib0-lib2component137.component';

describe('Lib1Lib0Lib2component137Component', () => {
  let component: Lib1Lib0Lib2component137Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});