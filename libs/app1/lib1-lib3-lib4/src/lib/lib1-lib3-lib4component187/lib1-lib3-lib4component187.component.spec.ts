import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib4component187Component } from './lib1-lib3-lib4component187.component';

describe('Lib1Lib3Lib4component187Component', () => {
  let component: Lib1Lib3Lib4component187Component;
  let fixture: ComponentFixture<Lib1Lib3Lib4component187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib4component187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib4component187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
