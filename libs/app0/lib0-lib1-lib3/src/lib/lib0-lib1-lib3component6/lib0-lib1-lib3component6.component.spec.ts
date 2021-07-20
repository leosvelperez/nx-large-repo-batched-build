import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component6Component } from './lib0-lib1-lib3component6.component';

describe('Lib0Lib1Lib3component6Component', () => {
  let component: Lib0Lib1Lib3component6Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
