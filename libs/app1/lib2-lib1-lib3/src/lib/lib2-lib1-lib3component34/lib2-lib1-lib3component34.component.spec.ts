import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib3component34Component } from './lib2-lib1-lib3component34.component';

describe('Lib2Lib1Lib3component34Component', () => {
  let component: Lib2Lib1Lib3component34Component;
  let fixture: ComponentFixture<Lib2Lib1Lib3component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib3component34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib3component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
