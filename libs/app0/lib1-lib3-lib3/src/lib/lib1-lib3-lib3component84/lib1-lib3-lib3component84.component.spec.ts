import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component84Component } from './lib1-lib3-lib3component84.component';

describe('Lib1Lib3Lib3component84Component', () => {
  let component: Lib1Lib3Lib3component84Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
