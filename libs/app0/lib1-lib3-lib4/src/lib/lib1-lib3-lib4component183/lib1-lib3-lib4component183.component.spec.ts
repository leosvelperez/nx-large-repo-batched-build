import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component183Component } from './lib1-lib3-lib4component183.component';

describe('Lib1Lib3Lib4component183Component', () => {
  let component: Lib1Lib3Lib4component183Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
