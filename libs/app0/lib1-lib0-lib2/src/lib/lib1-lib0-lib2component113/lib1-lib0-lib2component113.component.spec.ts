import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component113Component } from './lib1-lib0-lib2component113.component';

describe('Lib1Lib0Lib2component113Component', () => {
  let component: Lib1Lib0Lib2component113Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
