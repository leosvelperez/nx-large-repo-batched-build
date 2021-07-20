import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component154Component } from './lib1-lib3-lib4component154.component';

describe('Lib1Lib3Lib4component154Component', () => {
  let component: Lib1Lib3Lib4component154Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
