import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component3Component } from './lib1-lib3-lib4component3.component';

describe('Lib1Lib3Lib4component3Component', () => {
  let component: Lib1Lib3Lib4component3Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});