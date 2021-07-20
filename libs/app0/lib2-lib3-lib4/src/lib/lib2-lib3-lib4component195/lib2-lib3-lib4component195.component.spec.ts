import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component195Component } from './lib2-lib3-lib4component195.component';

describe('Lib2Lib3Lib4component195Component', () => {
  let component: Lib2Lib3Lib4component195Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
