import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib0component54Component } from './lib1-lib4-lib0component54.component';

describe('Lib1Lib4Lib0component54Component', () => {
  let component: Lib1Lib4Lib0component54Component;
  let fixture: ComponentFixture<Lib1Lib4Lib0component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib0component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib0component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
