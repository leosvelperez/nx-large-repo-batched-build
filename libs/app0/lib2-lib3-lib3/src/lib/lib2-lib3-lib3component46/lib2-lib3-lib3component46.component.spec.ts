import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component46Component } from './lib2-lib3-lib3component46.component';

describe('Lib2Lib3Lib3component46Component', () => {
  let component: Lib2Lib3Lib3component46Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
