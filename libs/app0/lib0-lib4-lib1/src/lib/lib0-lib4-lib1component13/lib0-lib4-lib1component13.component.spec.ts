import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component13Component } from './lib0-lib4-lib1component13.component';

describe('Lib0Lib4Lib1component13Component', () => {
  let component: Lib0Lib4Lib1component13Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
