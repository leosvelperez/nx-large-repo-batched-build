import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component106Component } from './lib0-lib3component106.component';

describe('Lib0Lib3component106Component', () => {
  let component: Lib0Lib3component106Component;
  let fixture: ComponentFixture<Lib0Lib3component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
