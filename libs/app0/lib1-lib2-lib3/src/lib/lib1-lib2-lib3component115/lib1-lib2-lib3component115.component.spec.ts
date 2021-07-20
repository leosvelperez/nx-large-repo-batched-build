import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component115Component } from './lib1-lib2-lib3component115.component';

describe('Lib1Lib2Lib3component115Component', () => {
  let component: Lib1Lib2Lib3component115Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
