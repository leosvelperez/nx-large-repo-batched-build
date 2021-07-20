import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib1component69Component } from './lib1-lib3-lib1component69.component';

describe('Lib1Lib3Lib1component69Component', () => {
  let component: Lib1Lib3Lib1component69Component;
  let fixture: ComponentFixture<Lib1Lib3Lib1component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib1component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib1component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
