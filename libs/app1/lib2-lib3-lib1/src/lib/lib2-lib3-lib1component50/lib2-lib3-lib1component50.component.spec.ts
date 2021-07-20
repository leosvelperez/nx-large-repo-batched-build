import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component50Component } from './lib2-lib3-lib1component50.component';

describe('Lib2Lib3Lib1component50Component', () => {
  let component: Lib2Lib3Lib1component50Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
