import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component40Component } from './lib0-lib1-lib3component40.component';

describe('Lib0Lib1Lib3component40Component', () => {
  let component: Lib0Lib1Lib3component40Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
