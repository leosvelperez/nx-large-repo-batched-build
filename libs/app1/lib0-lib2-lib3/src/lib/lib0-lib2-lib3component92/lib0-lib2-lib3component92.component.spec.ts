import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component92Component } from './lib0-lib2-lib3component92.component';

describe('Lib0Lib2Lib3component92Component', () => {
  let component: Lib0Lib2Lib3component92Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
