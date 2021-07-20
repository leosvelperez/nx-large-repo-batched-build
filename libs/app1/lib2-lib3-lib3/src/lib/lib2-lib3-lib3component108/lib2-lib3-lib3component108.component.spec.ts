import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component108Component } from './lib2-lib3-lib3component108.component';

describe('Lib2Lib3Lib3component108Component', () => {
  let component: Lib2Lib3Lib3component108Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
