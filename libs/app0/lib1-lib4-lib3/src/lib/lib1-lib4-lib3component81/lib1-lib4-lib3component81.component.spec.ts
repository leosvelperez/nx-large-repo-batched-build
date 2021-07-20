import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component81Component } from './lib1-lib4-lib3component81.component';

describe('Lib1Lib4Lib3component81Component', () => {
  let component: Lib1Lib4Lib3component81Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
