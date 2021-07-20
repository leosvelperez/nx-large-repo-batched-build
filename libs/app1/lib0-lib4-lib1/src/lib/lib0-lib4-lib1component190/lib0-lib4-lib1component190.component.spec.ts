import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component190Component } from './lib0-lib4-lib1component190.component';

describe('Lib0Lib4Lib1component190Component', () => {
  let component: Lib0Lib4Lib1component190Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
