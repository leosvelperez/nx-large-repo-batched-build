import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component83Component } from './lib0-lib2-lib3component83.component';

describe('Lib0Lib2Lib3component83Component', () => {
  let component: Lib0Lib2Lib3component83Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
