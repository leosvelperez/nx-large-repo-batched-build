import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component39Component } from './lib1-lib3component39.component';

describe('Lib1Lib3component39Component', () => {
  let component: Lib1Lib3component39Component;
  let fixture: ComponentFixture<Lib1Lib3component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});