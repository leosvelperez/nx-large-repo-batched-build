import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component145Component } from './lib2-lib3component145.component';

describe('Lib2Lib3component145Component', () => {
  let component: Lib2Lib3component145Component;
  let fixture: ComponentFixture<Lib2Lib3component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
