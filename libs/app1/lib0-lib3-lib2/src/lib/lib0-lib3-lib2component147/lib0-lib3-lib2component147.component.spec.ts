import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component147Component } from './lib0-lib3-lib2component147.component';

describe('Lib0Lib3Lib2component147Component', () => {
  let component: Lib0Lib3Lib2component147Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
