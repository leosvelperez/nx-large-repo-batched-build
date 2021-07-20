import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component76Component } from './lib1-lib1-lib3component76.component';

describe('Lib1Lib1Lib3component76Component', () => {
  let component: Lib1Lib1Lib3component76Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
