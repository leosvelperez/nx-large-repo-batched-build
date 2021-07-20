import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component78Component } from './lib0-lib3-lib2component78.component';

describe('Lib0Lib3Lib2component78Component', () => {
  let component: Lib0Lib3Lib2component78Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
