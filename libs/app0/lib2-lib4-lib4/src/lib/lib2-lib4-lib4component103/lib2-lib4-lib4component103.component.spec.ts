import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib4component103Component } from './lib2-lib4-lib4component103.component';

describe('Lib2Lib4Lib4component103Component', () => {
  let component: Lib2Lib4Lib4component103Component;
  let fixture: ComponentFixture<Lib2Lib4Lib4component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib4component103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib4component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
