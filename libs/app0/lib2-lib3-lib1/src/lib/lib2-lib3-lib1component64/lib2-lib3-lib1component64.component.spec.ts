import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component64Component } from './lib2-lib3-lib1component64.component';

describe('Lib2Lib3Lib1component64Component', () => {
  let component: Lib2Lib3Lib1component64Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
