import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component63Component } from './lib1-lib3-lib3component63.component';

describe('Lib1Lib3Lib3component63Component', () => {
  let component: Lib1Lib3Lib3component63Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
