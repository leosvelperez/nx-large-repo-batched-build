import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib2component71Component } from './lib2-lib0-lib2component71.component';

describe('Lib2Lib0Lib2component71Component', () => {
  let component: Lib2Lib0Lib2component71Component;
  let fixture: ComponentFixture<Lib2Lib0Lib2component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib2component71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib2component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
