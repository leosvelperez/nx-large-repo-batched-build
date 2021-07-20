import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component60Component } from './lib2-lib4-lib0component60.component';

describe('Lib2Lib4Lib0component60Component', () => {
  let component: Lib2Lib4Lib0component60Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
