import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component11Component } from './lib1-lib1-lib4component11.component';

describe('Lib1Lib1Lib4component11Component', () => {
  let component: Lib1Lib1Lib4component11Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
