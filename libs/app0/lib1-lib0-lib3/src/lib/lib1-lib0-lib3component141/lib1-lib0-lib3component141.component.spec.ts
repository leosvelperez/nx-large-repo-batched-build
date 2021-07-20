import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component141Component } from './lib1-lib0-lib3component141.component';

describe('Lib1Lib0Lib3component141Component', () => {
  let component: Lib1Lib0Lib3component141Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
