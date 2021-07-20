import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component106Component } from './lib1-lib2-lib3component106.component';

describe('Lib1Lib2Lib3component106Component', () => {
  let component: Lib1Lib2Lib3component106Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
