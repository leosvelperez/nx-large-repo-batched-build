import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib4component129Component } from './lib0-lib2-lib4component129.component';

describe('Lib0Lib2Lib4component129Component', () => {
  let component: Lib0Lib2Lib4component129Component;
  let fixture: ComponentFixture<Lib0Lib2Lib4component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib4component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib4component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});