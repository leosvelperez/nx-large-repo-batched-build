import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib2component198Component } from './lib0-lib1-lib2component198.component';

describe('Lib0Lib1Lib2component198Component', () => {
  let component: Lib0Lib1Lib2component198Component;
  let fixture: ComponentFixture<Lib0Lib1Lib2component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib2component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib2component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});