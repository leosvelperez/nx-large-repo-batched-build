import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component139Component } from './lib1-lib2-lib3component139.component';

describe('Lib1Lib2Lib3component139Component', () => {
  let component: Lib1Lib2Lib3component139Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
