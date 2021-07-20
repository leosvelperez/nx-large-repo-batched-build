import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component57Component } from './lib2-lib3component57.component';

describe('Lib2Lib3component57Component', () => {
  let component: Lib2Lib3component57Component;
  let fixture: ComponentFixture<Lib2Lib3component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
