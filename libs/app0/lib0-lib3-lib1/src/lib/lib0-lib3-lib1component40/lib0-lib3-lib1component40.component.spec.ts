import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component40Component } from './lib0-lib3-lib1component40.component';

describe('Lib0Lib3Lib1component40Component', () => {
  let component: Lib0Lib3Lib1component40Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
