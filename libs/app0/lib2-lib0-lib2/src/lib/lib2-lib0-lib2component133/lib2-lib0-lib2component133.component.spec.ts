import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib2component133Component } from './lib2-lib0-lib2component133.component';

describe('Lib2Lib0Lib2component133Component', () => {
  let component: Lib2Lib0Lib2component133Component;
  let fixture: ComponentFixture<Lib2Lib0Lib2component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib2component133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib2component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
