import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component47Component } from './lib1-lib4-lib3component47.component';

describe('Lib1Lib4Lib3component47Component', () => {
  let component: Lib1Lib4Lib3component47Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
