import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component75Component } from './lib1-lib2-lib3component75.component';

describe('Lib1Lib2Lib3component75Component', () => {
  let component: Lib1Lib2Lib3component75Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});