import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component190Component } from './lib0-lib3component190.component';

describe('Lib0Lib3component190Component', () => {
  let component: Lib0Lib3component190Component;
  let fixture: ComponentFixture<Lib0Lib3component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
