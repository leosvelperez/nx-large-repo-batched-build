import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component9Component } from './lib1-lib4-lib3component9.component';

describe('Lib1Lib4Lib3component9Component', () => {
  let component: Lib1Lib4Lib3component9Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
