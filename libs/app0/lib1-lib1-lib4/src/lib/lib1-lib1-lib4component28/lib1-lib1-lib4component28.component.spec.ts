import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component28Component } from './lib1-lib1-lib4component28.component';

describe('Lib1Lib1Lib4component28Component', () => {
  let component: Lib1Lib1Lib4component28Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
