import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component13Component } from './lib2-lib2-lib3component13.component';

describe('Lib2Lib2Lib3component13Component', () => {
  let component: Lib2Lib2Lib3component13Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
