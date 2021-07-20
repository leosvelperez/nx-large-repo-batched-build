import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component91Component } from './lib2-lib3-lib1component91.component';

describe('Lib2Lib3Lib1component91Component', () => {
  let component: Lib2Lib3Lib1component91Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
