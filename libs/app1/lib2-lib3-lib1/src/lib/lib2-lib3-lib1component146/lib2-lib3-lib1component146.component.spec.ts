import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component146Component } from './lib2-lib3-lib1component146.component';

describe('Lib2Lib3Lib1component146Component', () => {
  let component: Lib2Lib3Lib1component146Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
