import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib4component54Component } from './lib2-lib0-lib4component54.component';

describe('Lib2Lib0Lib4component54Component', () => {
  let component: Lib2Lib0Lib4component54Component;
  let fixture: ComponentFixture<Lib2Lib0Lib4component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib4component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib4component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
