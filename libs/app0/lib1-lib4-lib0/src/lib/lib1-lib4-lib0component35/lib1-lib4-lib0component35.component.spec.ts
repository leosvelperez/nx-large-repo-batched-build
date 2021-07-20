import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib0component35Component } from './lib1-lib4-lib0component35.component';

describe('Lib1Lib4Lib0component35Component', () => {
  let component: Lib1Lib4Lib0component35Component;
  let fixture: ComponentFixture<Lib1Lib4Lib0component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib0component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib0component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
