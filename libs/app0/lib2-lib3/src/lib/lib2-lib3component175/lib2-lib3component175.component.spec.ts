import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component175Component } from './lib2-lib3component175.component';

describe('Lib2Lib3component175Component', () => {
  let component: Lib2Lib3component175Component;
  let fixture: ComponentFixture<Lib2Lib3component175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});