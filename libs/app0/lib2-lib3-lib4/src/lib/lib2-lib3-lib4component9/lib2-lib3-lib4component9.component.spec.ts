import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component9Component } from './lib2-lib3-lib4component9.component';

describe('Lib2Lib3Lib4component9Component', () => {
  let component: Lib2Lib3Lib4component9Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
