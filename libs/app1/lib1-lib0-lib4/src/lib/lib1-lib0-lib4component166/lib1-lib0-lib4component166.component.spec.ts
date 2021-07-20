import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib4component166Component } from './lib1-lib0-lib4component166.component';

describe('Lib1Lib0Lib4component166Component', () => {
  let component: Lib1Lib0Lib4component166Component;
  let fixture: ComponentFixture<Lib1Lib0Lib4component166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib4component166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib4component166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
