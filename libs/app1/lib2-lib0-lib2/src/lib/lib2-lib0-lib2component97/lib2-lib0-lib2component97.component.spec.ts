import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib2component97Component } from './lib2-lib0-lib2component97.component';

describe('Lib2Lib0Lib2component97Component', () => {
  let component: Lib2Lib0Lib2component97Component;
  let fixture: ComponentFixture<Lib2Lib0Lib2component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib2component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib2component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});