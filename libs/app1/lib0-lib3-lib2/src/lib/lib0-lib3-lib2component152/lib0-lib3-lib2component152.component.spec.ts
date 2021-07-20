import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component152Component } from './lib0-lib3-lib2component152.component';

describe('Lib0Lib3Lib2component152Component', () => {
  let component: Lib0Lib3Lib2component152Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
