import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component156Component } from './lib1-lib3-lib4component156.component';

describe('Lib1Lib3Lib4component156Component', () => {
  let component: Lib1Lib3Lib4component156Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
