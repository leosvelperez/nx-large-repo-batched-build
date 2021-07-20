import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component169Component } from './lib1-lib4-lib3component169.component';

describe('Lib1Lib4Lib3component169Component', () => {
  let component: Lib1Lib4Lib3component169Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
