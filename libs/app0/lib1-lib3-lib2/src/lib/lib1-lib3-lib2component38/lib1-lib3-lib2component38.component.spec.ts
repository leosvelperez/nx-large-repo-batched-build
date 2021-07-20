import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib2component38Component } from './lib1-lib3-lib2component38.component';

describe('Lib1Lib3Lib2component38Component', () => {
  let component: Lib1Lib3Lib2component38Component;
  let fixture: ComponentFixture<Lib1Lib3Lib2component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib2component38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib2component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
