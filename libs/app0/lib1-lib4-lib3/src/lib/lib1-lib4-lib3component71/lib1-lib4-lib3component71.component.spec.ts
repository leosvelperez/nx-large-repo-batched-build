import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component71Component } from './lib1-lib4-lib3component71.component';

describe('Lib1Lib4Lib3component71Component', () => {
  let component: Lib1Lib4Lib3component71Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});