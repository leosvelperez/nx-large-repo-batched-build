import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component14Component } from './lib2-lib2-lib3component14.component';

describe('Lib2Lib2Lib3component14Component', () => {
  let component: Lib2Lib2Lib3component14Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
