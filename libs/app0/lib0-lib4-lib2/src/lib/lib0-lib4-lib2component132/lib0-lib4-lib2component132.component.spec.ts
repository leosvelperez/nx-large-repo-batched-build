import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component132Component } from './lib0-lib4-lib2component132.component';

describe('Lib0Lib4Lib2component132Component', () => {
  let component: Lib0Lib4Lib2component132Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
