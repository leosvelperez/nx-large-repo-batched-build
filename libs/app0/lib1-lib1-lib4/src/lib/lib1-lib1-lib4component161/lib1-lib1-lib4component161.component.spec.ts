import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component161Component } from './lib1-lib1-lib4component161.component';

describe('Lib1Lib1Lib4component161Component', () => {
  let component: Lib1Lib1Lib4component161Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
