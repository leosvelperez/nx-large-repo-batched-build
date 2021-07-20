import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component82Component } from './lib2-lib4-lib0component82.component';

describe('Lib2Lib4Lib0component82Component', () => {
  let component: Lib2Lib4Lib0component82Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
