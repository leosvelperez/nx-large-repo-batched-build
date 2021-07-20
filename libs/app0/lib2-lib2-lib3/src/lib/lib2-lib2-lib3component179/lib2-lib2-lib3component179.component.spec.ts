import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component179Component } from './lib2-lib2-lib3component179.component';

describe('Lib2Lib2Lib3component179Component', () => {
  let component: Lib2Lib2Lib3component179Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
