import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib4component108Component } from './lib0-lib3-lib4component108.component';

describe('Lib0Lib3Lib4component108Component', () => {
  let component: Lib0Lib3Lib4component108Component;
  let fixture: ComponentFixture<Lib0Lib3Lib4component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib4component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib4component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
