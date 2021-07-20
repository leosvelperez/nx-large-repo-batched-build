import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component1Component } from './lib2-lib4-lib0component1.component';

describe('Lib2Lib4Lib0component1Component', () => {
  let component: Lib2Lib4Lib0component1Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
