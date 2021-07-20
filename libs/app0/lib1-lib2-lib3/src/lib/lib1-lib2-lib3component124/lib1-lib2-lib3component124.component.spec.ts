import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component124Component } from './lib1-lib2-lib3component124.component';

describe('Lib1Lib2Lib3component124Component', () => {
  let component: Lib1Lib2Lib3component124Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
