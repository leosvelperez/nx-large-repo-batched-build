import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib2component64Component } from './lib1-lib3-lib2component64.component';

describe('Lib1Lib3Lib2component64Component', () => {
  let component: Lib1Lib3Lib2component64Component;
  let fixture: ComponentFixture<Lib1Lib3Lib2component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib2component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib2component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});