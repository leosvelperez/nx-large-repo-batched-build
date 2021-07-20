import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component152Component } from './lib1-lib1-lib4component152.component';

describe('Lib1Lib1Lib4component152Component', () => {
  let component: Lib1Lib1Lib4component152Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
