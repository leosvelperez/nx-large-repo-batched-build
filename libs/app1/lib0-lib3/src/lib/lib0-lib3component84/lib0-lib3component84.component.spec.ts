import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component84Component } from './lib0-lib3component84.component';

describe('Lib0Lib3component84Component', () => {
  let component: Lib0Lib3component84Component;
  let fixture: ComponentFixture<Lib0Lib3component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});