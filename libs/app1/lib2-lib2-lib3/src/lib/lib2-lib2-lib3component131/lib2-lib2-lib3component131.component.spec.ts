import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component131Component } from './lib2-lib2-lib3component131.component';

describe('Lib2Lib2Lib3component131Component', () => {
  let component: Lib2Lib2Lib3component131Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
