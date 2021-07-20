import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib4component75Component } from './lib2-lib0-lib4component75.component';

describe('Lib2Lib0Lib4component75Component', () => {
  let component: Lib2Lib0Lib4component75Component;
  let fixture: ComponentFixture<Lib2Lib0Lib4component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib4component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib4component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
