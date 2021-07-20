import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component153Component } from './lib1-lib4component153.component';

describe('Lib1Lib4component153Component', () => {
  let component: Lib1Lib4component153Component;
  let fixture: ComponentFixture<Lib1Lib4component153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
