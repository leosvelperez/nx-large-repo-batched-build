import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component37Component } from './lib1-lib2-lib3component37.component';

describe('Lib1Lib2Lib3component37Component', () => {
  let component: Lib1Lib2Lib3component37Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
