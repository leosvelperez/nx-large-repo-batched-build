import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib4component50Component } from './lib2-lib1-lib4component50.component';

describe('Lib2Lib1Lib4component50Component', () => {
  let component: Lib2Lib1Lib4component50Component;
  let fixture: ComponentFixture<Lib2Lib1Lib4component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib4component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib4component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
