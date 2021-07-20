import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component24Component } from './lib2-lib3component24.component';

describe('Lib2Lib3component24Component', () => {
  let component: Lib2Lib3component24Component;
  let fixture: ComponentFixture<Lib2Lib3component24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
