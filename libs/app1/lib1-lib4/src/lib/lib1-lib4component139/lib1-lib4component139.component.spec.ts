import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component139Component } from './lib1-lib4component139.component';

describe('Lib1Lib4component139Component', () => {
  let component: Lib1Lib4component139Component;
  let fixture: ComponentFixture<Lib1Lib4component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
