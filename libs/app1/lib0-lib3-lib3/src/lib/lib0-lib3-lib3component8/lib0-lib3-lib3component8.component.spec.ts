import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component8Component } from './lib0-lib3-lib3component8.component';

describe('Lib0Lib3Lib3component8Component', () => {
  let component: Lib0Lib3Lib3component8Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
