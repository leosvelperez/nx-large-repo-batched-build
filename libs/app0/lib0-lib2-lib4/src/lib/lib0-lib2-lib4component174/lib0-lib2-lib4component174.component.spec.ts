import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib4component174Component } from './lib0-lib2-lib4component174.component';

describe('Lib0Lib2Lib4component174Component', () => {
  let component: Lib0Lib2Lib4component174Component;
  let fixture: ComponentFixture<Lib0Lib2Lib4component174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib4component174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib4component174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
