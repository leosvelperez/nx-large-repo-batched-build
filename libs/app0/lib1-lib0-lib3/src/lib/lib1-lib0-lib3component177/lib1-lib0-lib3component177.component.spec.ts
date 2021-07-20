import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component177Component } from './lib1-lib0-lib3component177.component';

describe('Lib1Lib0Lib3component177Component', () => {
  let component: Lib1Lib0Lib3component177Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
