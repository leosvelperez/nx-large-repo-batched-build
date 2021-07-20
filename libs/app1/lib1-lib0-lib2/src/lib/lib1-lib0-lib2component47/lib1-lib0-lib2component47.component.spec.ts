import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component47Component } from './lib1-lib0-lib2component47.component';

describe('Lib1Lib0Lib2component47Component', () => {
  let component: Lib1Lib0Lib2component47Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
