import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component2Component } from './lib0-lib4-lib2component2.component';

describe('Lib0Lib4Lib2component2Component', () => {
  let component: Lib0Lib4Lib2component2Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
