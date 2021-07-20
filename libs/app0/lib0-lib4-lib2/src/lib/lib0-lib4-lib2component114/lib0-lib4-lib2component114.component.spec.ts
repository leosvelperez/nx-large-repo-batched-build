import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component114Component } from './lib0-lib4-lib2component114.component';

describe('Lib0Lib4Lib2component114Component', () => {
  let component: Lib0Lib4Lib2component114Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
