import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component171Component } from './lib1-lib4component171.component';

describe('Lib1Lib4component171Component', () => {
  let component: Lib1Lib4component171Component;
  let fixture: ComponentFixture<Lib1Lib4component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
