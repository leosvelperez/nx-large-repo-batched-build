import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component116Component } from './lib2-lib3component116.component';

describe('Lib2Lib3component116Component', () => {
  let component: Lib2Lib3component116Component;
  let fixture: ComponentFixture<Lib2Lib3component116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
