import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib3component149Component } from './lib2-lib1-lib3component149.component';

describe('Lib2Lib1Lib3component149Component', () => {
  let component: Lib2Lib1Lib3component149Component;
  let fixture: ComponentFixture<Lib2Lib1Lib3component149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib3component149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib3component149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
