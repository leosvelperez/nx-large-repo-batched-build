import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component102Component } from './lib0-lib2-lib2component102.component';

describe('Lib0Lib2Lib2component102Component', () => {
  let component: Lib0Lib2Lib2component102Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});