import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component175Component } from './lib0-lib2-lib3component175.component';

describe('Lib0Lib2Lib3component175Component', () => {
  let component: Lib0Lib2Lib3component175Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});