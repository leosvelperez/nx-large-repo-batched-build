import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib1component173Component } from './lib1-lib3-lib1component173.component';

describe('Lib1Lib3Lib1component173Component', () => {
  let component: Lib1Lib3Lib1component173Component;
  let fixture: ComponentFixture<Lib1Lib3Lib1component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib1component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib1component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
