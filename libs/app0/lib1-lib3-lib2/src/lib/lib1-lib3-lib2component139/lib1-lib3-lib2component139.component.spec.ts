import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib2component139Component } from './lib1-lib3-lib2component139.component';

describe('Lib1Lib3Lib2component139Component', () => {
  let component: Lib1Lib3Lib2component139Component;
  let fixture: ComponentFixture<Lib1Lib3Lib2component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib2component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib2component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});