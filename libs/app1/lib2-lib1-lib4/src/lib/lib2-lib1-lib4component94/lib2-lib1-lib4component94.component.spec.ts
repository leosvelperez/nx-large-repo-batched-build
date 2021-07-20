import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib4component94Component } from './lib2-lib1-lib4component94.component';

describe('Lib2Lib1Lib4component94Component', () => {
  let component: Lib2Lib1Lib4component94Component;
  let fixture: ComponentFixture<Lib2Lib1Lib4component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib4component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib4component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
