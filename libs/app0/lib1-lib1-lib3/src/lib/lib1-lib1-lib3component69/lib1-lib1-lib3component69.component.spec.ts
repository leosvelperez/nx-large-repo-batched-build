import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component69Component } from './lib1-lib1-lib3component69.component';

describe('Lib1Lib1Lib3component69Component', () => {
  let component: Lib1Lib1Lib3component69Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
