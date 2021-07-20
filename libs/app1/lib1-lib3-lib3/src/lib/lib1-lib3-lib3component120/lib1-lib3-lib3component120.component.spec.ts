import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component120Component } from './lib1-lib3-lib3component120.component';

describe('Lib1Lib3Lib3component120Component', () => {
  let component: Lib1Lib3Lib3component120Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
