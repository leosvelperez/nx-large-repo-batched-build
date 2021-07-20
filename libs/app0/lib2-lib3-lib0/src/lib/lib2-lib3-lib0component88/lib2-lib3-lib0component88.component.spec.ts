import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component88Component } from './lib2-lib3-lib0component88.component';

describe('Lib2Lib3Lib0component88Component', () => {
  let component: Lib2Lib3Lib0component88Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
