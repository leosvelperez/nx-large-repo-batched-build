import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component49Component } from './lib0-lib2-lib3component49.component';

describe('Lib0Lib2Lib3component49Component', () => {
  let component: Lib0Lib2Lib3component49Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
