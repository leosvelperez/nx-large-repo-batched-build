import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component193Component } from './lib1-lib0-lib2component193.component';

describe('Lib1Lib0Lib2component193Component', () => {
  let component: Lib1Lib0Lib2component193Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
