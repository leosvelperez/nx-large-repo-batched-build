import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component97Component } from './lib0-lib1-lib4component97.component';

describe('Lib0Lib1Lib4component97Component', () => {
  let component: Lib0Lib1Lib4component97Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
