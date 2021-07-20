import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component95Component } from './lib1-lib1-lib3component95.component';

describe('Lib1Lib1Lib3component95Component', () => {
  let component: Lib1Lib1Lib3component95Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
