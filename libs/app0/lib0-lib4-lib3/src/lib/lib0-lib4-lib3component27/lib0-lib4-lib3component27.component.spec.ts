import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib3component27Component } from './lib0-lib4-lib3component27.component';

describe('Lib0Lib4Lib3component27Component', () => {
  let component: Lib0Lib4Lib3component27Component;
  let fixture: ComponentFixture<Lib0Lib4Lib3component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib3component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib3component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
