import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component58Component } from './lib0-lib3component58.component';

describe('Lib0Lib3component58Component', () => {
  let component: Lib0Lib3component58Component;
  let fixture: ComponentFixture<Lib0Lib3component58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});