import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component157Component } from './lib0-lib2-lib3component157.component';

describe('Lib0Lib2Lib3component157Component', () => {
  let component: Lib0Lib2Lib3component157Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});