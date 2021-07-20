import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component11Component } from './lib1-lib2-lib3component11.component';

describe('Lib1Lib2Lib3component11Component', () => {
  let component: Lib1Lib2Lib3component11Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
