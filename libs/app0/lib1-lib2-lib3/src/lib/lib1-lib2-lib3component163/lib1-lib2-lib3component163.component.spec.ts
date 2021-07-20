import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component163Component } from './lib1-lib2-lib3component163.component';

describe('Lib1Lib2Lib3component163Component', () => {
  let component: Lib1Lib2Lib3component163Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
