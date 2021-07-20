import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib4component180Component } from './lib2-lib0-lib4component180.component';

describe('Lib2Lib0Lib4component180Component', () => {
  let component: Lib2Lib0Lib4component180Component;
  let fixture: ComponentFixture<Lib2Lib0Lib4component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib4component180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib4component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
