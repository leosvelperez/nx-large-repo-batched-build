import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component20Component } from './lib1-lib2-lib4component20.component';

describe('Lib1Lib2Lib4component20Component', () => {
  let component: Lib1Lib2Lib4component20Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
