import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component143Component } from './lib0-lib3-lib2component143.component';

describe('Lib0Lib3Lib2component143Component', () => {
  let component: Lib0Lib3Lib2component143Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});