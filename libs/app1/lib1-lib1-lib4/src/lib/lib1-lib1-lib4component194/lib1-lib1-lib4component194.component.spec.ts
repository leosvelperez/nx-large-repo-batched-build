import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component194Component } from './lib1-lib1-lib4component194.component';

describe('Lib1Lib1Lib4component194Component', () => {
  let component: Lib1Lib1Lib4component194Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});