import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component51Component } from './lib0-lib4-lib1component51.component';

describe('Lib0Lib4Lib1component51Component', () => {
  let component: Lib0Lib4Lib1component51Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
