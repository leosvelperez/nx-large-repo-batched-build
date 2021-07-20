import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib0component2Component } from './lib2-lib2-lib0component2.component';

describe('Lib2Lib2Lib0component2Component', () => {
  let component: Lib2Lib2Lib0component2Component;
  let fixture: ComponentFixture<Lib2Lib2Lib0component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib0component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
