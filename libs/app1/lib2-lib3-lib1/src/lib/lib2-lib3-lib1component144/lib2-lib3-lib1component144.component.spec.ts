import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component144Component } from './lib2-lib3-lib1component144.component';

describe('Lib2Lib3Lib1component144Component', () => {
  let component: Lib2Lib3Lib1component144Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});