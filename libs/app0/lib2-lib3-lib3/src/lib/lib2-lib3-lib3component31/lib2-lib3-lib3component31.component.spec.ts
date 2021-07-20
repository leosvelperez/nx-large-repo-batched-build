import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component31Component } from './lib2-lib3-lib3component31.component';

describe('Lib2Lib3Lib3component31Component', () => {
  let component: Lib2Lib3Lib3component31Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
