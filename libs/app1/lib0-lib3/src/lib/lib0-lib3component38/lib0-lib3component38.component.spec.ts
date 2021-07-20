import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component38Component } from './lib0-lib3component38.component';

describe('Lib0Lib3component38Component', () => {
  let component: Lib0Lib3component38Component;
  let fixture: ComponentFixture<Lib0Lib3component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
