import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib4component101Component } from './lib0-lib2-lib4component101.component';

describe('Lib0Lib2Lib4component101Component', () => {
  let component: Lib0Lib2Lib4component101Component;
  let fixture: ComponentFixture<Lib0Lib2Lib4component101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib4component101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib4component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
