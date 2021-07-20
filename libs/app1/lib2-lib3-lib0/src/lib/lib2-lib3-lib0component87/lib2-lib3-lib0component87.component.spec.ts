import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component87Component } from './lib2-lib3-lib0component87.component';

describe('Lib2Lib3Lib0component87Component', () => {
  let component: Lib2Lib3Lib0component87Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
