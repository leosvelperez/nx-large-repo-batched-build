import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib3component69Component } from './lib2-lib1-lib3component69.component';

describe('Lib2Lib1Lib3component69Component', () => {
  let component: Lib2Lib1Lib3component69Component;
  let fixture: ComponentFixture<Lib2Lib1Lib3component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib3component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib3component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
