import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component128Component } from './lib0-lib1-lib1component128.component';

describe('Lib0Lib1Lib1component128Component', () => {
  let component: Lib0Lib1Lib1component128Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
