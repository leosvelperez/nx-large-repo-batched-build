import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib4component59Component } from './lib2-lib0-lib4component59.component';

describe('Lib2Lib0Lib4component59Component', () => {
  let component: Lib2Lib0Lib4component59Component;
  let fixture: ComponentFixture<Lib2Lib0Lib4component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib4component59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib4component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});