import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component124Component } from './lib0-lib3-lib3component124.component';

describe('Lib0Lib3Lib3component124Component', () => {
  let component: Lib0Lib3Lib3component124Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
