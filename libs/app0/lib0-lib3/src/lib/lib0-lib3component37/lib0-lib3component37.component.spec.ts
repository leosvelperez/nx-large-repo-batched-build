import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component37Component } from './lib0-lib3component37.component';

describe('Lib0Lib3component37Component', () => {
  let component: Lib0Lib3component37Component;
  let fixture: ComponentFixture<Lib0Lib3component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
