import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component178Component } from './lib1-lib2-lib4component178.component';

describe('Lib1Lib2Lib4component178Component', () => {
  let component: Lib1Lib2Lib4component178Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});