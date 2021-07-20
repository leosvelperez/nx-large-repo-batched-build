import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component133Component } from './lib0-lib1-lib3component133.component';

describe('Lib0Lib1Lib3component133Component', () => {
  let component: Lib0Lib1Lib3component133Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
