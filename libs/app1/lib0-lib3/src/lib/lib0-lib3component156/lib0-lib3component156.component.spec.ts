import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component156Component } from './lib0-lib3component156.component';

describe('Lib0Lib3component156Component', () => {
  let component: Lib0Lib3component156Component;
  let fixture: ComponentFixture<Lib0Lib3component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
