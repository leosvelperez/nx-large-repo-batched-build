import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component89Component } from './lib2-lib3-lib0component89.component';

describe('Lib2Lib3Lib0component89Component', () => {
  let component: Lib2Lib3Lib0component89Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
