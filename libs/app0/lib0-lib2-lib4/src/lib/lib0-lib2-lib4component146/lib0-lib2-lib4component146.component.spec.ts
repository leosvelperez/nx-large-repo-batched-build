import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib4component146Component } from './lib0-lib2-lib4component146.component';

describe('Lib0Lib2Lib4component146Component', () => {
  let component: Lib0Lib2Lib4component146Component;
  let fixture: ComponentFixture<Lib0Lib2Lib4component146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib4component146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib4component146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});