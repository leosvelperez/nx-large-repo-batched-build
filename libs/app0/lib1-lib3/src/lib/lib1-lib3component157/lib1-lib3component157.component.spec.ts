import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component157Component } from './lib1-lib3component157.component';

describe('Lib1Lib3component157Component', () => {
  let component: Lib1Lib3component157Component;
  let fixture: ComponentFixture<Lib1Lib3component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});