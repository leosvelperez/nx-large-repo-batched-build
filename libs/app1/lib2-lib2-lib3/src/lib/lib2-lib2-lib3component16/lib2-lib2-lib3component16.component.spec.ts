import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component16Component } from './lib2-lib2-lib3component16.component';

describe('Lib2Lib2Lib3component16Component', () => {
  let component: Lib2Lib2Lib3component16Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
