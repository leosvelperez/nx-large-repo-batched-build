import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component5Component } from './lib1-lib3-lib4component5.component';

describe('Lib1Lib3Lib4component5Component', () => {
  let component: Lib1Lib3Lib4component5Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
