import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component151Component } from './lib2-lib3component151.component';

describe('Lib2Lib3component151Component', () => {
  let component: Lib2Lib3component151Component;
  let fixture: ComponentFixture<Lib2Lib3component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
