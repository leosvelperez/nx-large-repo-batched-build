import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component151Component } from './lib1-lib3component151.component';

describe('Lib1Lib3component151Component', () => {
  let component: Lib1Lib3component151Component;
  let fixture: ComponentFixture<Lib1Lib3component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
