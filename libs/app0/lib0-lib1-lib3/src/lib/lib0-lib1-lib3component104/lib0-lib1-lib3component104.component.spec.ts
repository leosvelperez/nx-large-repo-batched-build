import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component104Component } from './lib0-lib1-lib3component104.component';

describe('Lib0Lib1Lib3component104Component', () => {
  let component: Lib0Lib1Lib3component104Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});