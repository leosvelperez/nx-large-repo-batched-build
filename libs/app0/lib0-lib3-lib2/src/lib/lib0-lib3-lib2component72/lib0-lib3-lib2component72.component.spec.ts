import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component72Component } from './lib0-lib3-lib2component72.component';

describe('Lib0Lib3Lib2component72Component', () => {
  let component: Lib0Lib3Lib2component72Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
