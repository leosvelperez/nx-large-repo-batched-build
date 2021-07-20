import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component49Component } from './lib1-lib2-lib3component49.component';

describe('Lib1Lib2Lib3component49Component', () => {
  let component: Lib1Lib2Lib3component49Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
