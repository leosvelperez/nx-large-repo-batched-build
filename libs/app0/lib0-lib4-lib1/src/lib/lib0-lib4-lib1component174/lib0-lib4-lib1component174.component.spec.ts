import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component174Component } from './lib0-lib4-lib1component174.component';

describe('Lib0Lib4Lib1component174Component', () => {
  let component: Lib0Lib4Lib1component174Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
