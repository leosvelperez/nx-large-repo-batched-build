import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component17Component } from './lib2-lib3-lib0component17.component';

describe('Lib2Lib3Lib0component17Component', () => {
  let component: Lib2Lib3Lib0component17Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
