import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4component184Component } from './lib1-lib4-lib4component184.component';

describe('Lib1Lib4Lib4component184Component', () => {
  let component: Lib1Lib4Lib4component184Component;
  let fixture: ComponentFixture<Lib1Lib4Lib4component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4component184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});