import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component136Component } from './lib0-lib3-lib2component136.component';

describe('Lib0Lib3Lib2component136Component', () => {
  let component: Lib0Lib3Lib2component136Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
