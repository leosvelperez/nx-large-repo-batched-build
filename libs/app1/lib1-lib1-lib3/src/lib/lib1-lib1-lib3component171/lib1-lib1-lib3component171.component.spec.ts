import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component171Component } from './lib1-lib1-lib3component171.component';

describe('Lib1Lib1Lib3component171Component', () => {
  let component: Lib1Lib1Lib3component171Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
