import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component176Component } from './lib1-lib3component176.component';

describe('Lib1Lib3component176Component', () => {
  let component: Lib1Lib3component176Component;
  let fixture: ComponentFixture<Lib1Lib3component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
