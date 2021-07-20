import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component170Component } from './lib0-lib1-lib1component170.component';

describe('Lib0Lib1Lib1component170Component', () => {
  let component: Lib0Lib1Lib1component170Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
