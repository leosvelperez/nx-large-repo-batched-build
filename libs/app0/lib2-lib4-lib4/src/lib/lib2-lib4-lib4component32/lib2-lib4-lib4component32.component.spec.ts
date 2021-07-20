import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib4component32Component } from './lib2-lib4-lib4component32.component';

describe('Lib2Lib4Lib4component32Component', () => {
  let component: Lib2Lib4Lib4component32Component;
  let fixture: ComponentFixture<Lib2Lib4Lib4component32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib4component32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib4component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
