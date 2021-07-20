import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component84Component } from './lib2-lib3-lib1component84.component';

describe('Lib2Lib3Lib1component84Component', () => {
  let component: Lib2Lib3Lib1component84Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
