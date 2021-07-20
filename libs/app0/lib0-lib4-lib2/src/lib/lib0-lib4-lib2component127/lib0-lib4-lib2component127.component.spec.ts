import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component127Component } from './lib0-lib4-lib2component127.component';

describe('Lib0Lib4Lib2component127Component', () => {
  let component: Lib0Lib4Lib2component127Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
