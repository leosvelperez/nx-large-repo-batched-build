import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib3component124Component } from './lib2-lib0-lib3component124.component';

describe('Lib2Lib0Lib3component124Component', () => {
  let component: Lib2Lib0Lib3component124Component;
  let fixture: ComponentFixture<Lib2Lib0Lib3component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib3component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib3component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
