import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component7Component } from './lib2-lib3-lib1component7.component';

describe('Lib2Lib3Lib1component7Component', () => {
  let component: Lib2Lib3Lib1component7Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
