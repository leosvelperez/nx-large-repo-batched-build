import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib3component97Component } from './lib0-lib0-lib3component97.component';

describe('Lib0Lib0Lib3component97Component', () => {
  let component: Lib0Lib0Lib3component97Component;
  let fixture: ComponentFixture<Lib0Lib0Lib3component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib3component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib3component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});