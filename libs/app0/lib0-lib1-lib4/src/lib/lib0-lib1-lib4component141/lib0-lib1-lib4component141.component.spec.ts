import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component141Component } from './lib0-lib1-lib4component141.component';

describe('Lib0Lib1Lib4component141Component', () => {
  let component: Lib0Lib1Lib4component141Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
