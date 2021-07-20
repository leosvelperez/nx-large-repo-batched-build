import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component186Component } from './lib1-lib2-lib4component186.component';

describe('Lib1Lib2Lib4component186Component', () => {
  let component: Lib1Lib2Lib4component186Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
