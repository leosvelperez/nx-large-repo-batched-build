import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib1component81Component } from './lib1-lib3-lib1component81.component';

describe('Lib1Lib3Lib1component81Component', () => {
  let component: Lib1Lib3Lib1component81Component;
  let fixture: ComponentFixture<Lib1Lib3Lib1component81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib1component81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib1component81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});