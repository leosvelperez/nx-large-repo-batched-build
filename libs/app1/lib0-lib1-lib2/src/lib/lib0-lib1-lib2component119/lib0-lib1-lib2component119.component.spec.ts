import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib2component119Component } from './lib0-lib1-lib2component119.component';

describe('Lib0Lib1Lib2component119Component', () => {
  let component: Lib0Lib1Lib2component119Component;
  let fixture: ComponentFixture<Lib0Lib1Lib2component119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib2component119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib2component119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
