import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component134Component } from './lib0-lib3-lib2component134.component';

describe('Lib0Lib3Lib2component134Component', () => {
  let component: Lib0Lib3Lib2component134Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
