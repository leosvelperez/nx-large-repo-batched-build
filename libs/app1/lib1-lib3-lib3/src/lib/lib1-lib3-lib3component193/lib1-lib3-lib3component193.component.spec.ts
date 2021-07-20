import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component193Component } from './lib1-lib3-lib3component193.component';

describe('Lib1Lib3Lib3component193Component', () => {
  let component: Lib1Lib3Lib3component193Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
