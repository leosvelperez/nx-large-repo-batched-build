import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component191Component } from './lib2-lib3component191.component';

describe('Lib2Lib3component191Component', () => {
  let component: Lib2Lib3component191Component;
  let fixture: ComponentFixture<Lib2Lib3component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
