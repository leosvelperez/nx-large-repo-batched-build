import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component21Component } from './lib0-lib4-lib1component21.component';

describe('Lib0Lib4Lib1component21Component', () => {
  let component: Lib0Lib4Lib1component21Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});