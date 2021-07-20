import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component145Component } from './lib1-lib3-lib3component145.component';

describe('Lib1Lib3Lib3component145Component', () => {
  let component: Lib1Lib3Lib3component145Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
