import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component69Component } from './lib2-lib3-lib4component69.component';

describe('Lib2Lib3Lib4component69Component', () => {
  let component: Lib2Lib3Lib4component69Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
