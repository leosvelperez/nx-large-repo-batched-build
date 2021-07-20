import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component17Component } from './lib2-lib0component17.component';

describe('Lib2Lib0component17Component', () => {
  let component: Lib2Lib0component17Component;
  let fixture: ComponentFixture<Lib2Lib0component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
