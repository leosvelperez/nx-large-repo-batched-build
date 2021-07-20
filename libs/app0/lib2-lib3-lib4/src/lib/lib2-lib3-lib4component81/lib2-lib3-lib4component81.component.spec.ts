import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component81Component } from './lib2-lib3-lib4component81.component';

describe('Lib2Lib3Lib4component81Component', () => {
  let component: Lib2Lib3Lib4component81Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
