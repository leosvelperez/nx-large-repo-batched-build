import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component174Component } from './lib2-lib2-lib3component174.component';

describe('Lib2Lib2Lib3component174Component', () => {
  let component: Lib2Lib2Lib3component174Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
