import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component33Component } from './lib0-lib1-lib3component33.component';

describe('Lib0Lib1Lib3component33Component', () => {
  let component: Lib0Lib1Lib3component33Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
