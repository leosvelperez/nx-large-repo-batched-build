import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component125Component } from './lib1-lib2-lib3component125.component';

describe('Lib1Lib2Lib3component125Component', () => {
  let component: Lib1Lib2Lib3component125Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
