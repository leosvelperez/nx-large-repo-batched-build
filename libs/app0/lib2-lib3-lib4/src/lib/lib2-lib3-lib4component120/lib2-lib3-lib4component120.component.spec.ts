import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component120Component } from './lib2-lib3-lib4component120.component';

describe('Lib2Lib3Lib4component120Component', () => {
  let component: Lib2Lib3Lib4component120Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});