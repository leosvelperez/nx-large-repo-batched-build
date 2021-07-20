import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component117Component } from './lib0-lib2-lib3component117.component';

describe('Lib0Lib2Lib3component117Component', () => {
  let component: Lib0Lib2Lib3component117Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
