import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component105Component } from './lib0-lib3-lib3component105.component';

describe('Lib0Lib3Lib3component105Component', () => {
  let component: Lib0Lib3Lib3component105Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
