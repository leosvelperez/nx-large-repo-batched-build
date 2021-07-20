import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component107Component } from './lib0-lib3-lib2component107.component';

describe('Lib0Lib3Lib2component107Component', () => {
  let component: Lib0Lib3Lib2component107Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
