import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component44Component } from './lib1-lib1-lib3component44.component';

describe('Lib1Lib1Lib3component44Component', () => {
  let component: Lib1Lib1Lib3component44Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
