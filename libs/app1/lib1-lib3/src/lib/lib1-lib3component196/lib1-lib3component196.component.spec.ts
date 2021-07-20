import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component196Component } from './lib1-lib3component196.component';

describe('Lib1Lib3component196Component', () => {
  let component: Lib1Lib3component196Component;
  let fixture: ComponentFixture<Lib1Lib3component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
