import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib1component161Component } from './lib0-lib4-lib1component161.component';

describe('Lib0Lib4Lib1component161Component', () => {
  let component: Lib0Lib4Lib1component161Component;
  let fixture: ComponentFixture<Lib0Lib4Lib1component161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib1component161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib1component161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});