import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component98Component } from './lib1-lib4component98.component';

describe('Lib1Lib4component98Component', () => {
  let component: Lib1Lib4component98Component;
  let fixture: ComponentFixture<Lib1Lib4component98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
