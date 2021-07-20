import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component189Component } from './lib0-lib3component189.component';

describe('Lib0Lib3component189Component', () => {
  let component: Lib0Lib3component189Component;
  let fixture: ComponentFixture<Lib0Lib3component189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
