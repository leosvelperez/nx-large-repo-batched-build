import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component2Component } from './lib2-lib3component2.component';

describe('Lib2Lib3component2Component', () => {
  let component: Lib2Lib3component2Component;
  let fixture: ComponentFixture<Lib2Lib3component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
