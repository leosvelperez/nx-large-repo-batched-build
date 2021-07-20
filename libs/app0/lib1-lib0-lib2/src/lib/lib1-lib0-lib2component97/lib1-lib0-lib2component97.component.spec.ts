import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component97Component } from './lib1-lib0-lib2component97.component';

describe('Lib1Lib0Lib2component97Component', () => {
  let component: Lib1Lib0Lib2component97Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
