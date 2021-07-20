import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component167Component } from './lib1-lib3component167.component';

describe('Lib1Lib3component167Component', () => {
  let component: Lib1Lib3component167Component;
  let fixture: ComponentFixture<Lib1Lib3component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
