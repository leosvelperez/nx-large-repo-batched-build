import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component36Component } from './lib2-lib3-lib4component36.component';

describe('Lib2Lib3Lib4component36Component', () => {
  let component: Lib2Lib3Lib4component36Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
