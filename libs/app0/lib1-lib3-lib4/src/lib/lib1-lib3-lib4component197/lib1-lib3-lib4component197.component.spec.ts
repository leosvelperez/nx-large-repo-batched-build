import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component197Component } from './lib1-lib3-lib4component197.component';

describe('Lib1Lib3Lib4component197Component', () => {
  let component: Lib1Lib3Lib4component197Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});