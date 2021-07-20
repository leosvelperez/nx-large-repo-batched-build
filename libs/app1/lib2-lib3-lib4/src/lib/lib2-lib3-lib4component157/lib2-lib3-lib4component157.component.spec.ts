import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component157Component } from './lib2-lib3-lib4component157.component';

describe('Lib2Lib3Lib4component157Component', () => {
  let component: Lib2Lib3Lib4component157Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
