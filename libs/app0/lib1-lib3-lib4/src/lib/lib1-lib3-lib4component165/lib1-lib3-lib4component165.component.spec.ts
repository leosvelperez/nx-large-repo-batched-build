import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component165Component } from './lib1-lib3-lib4component165.component';

describe('Lib1Lib3Lib4component165Component', () => {
  let component: Lib1Lib3Lib4component165Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});