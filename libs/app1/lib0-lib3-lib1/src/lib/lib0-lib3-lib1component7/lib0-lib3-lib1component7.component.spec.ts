import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component7Component } from './lib0-lib3-lib1component7.component';

describe('Lib0Lib3Lib1component7Component', () => {
  let component: Lib0Lib3Lib1component7Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});