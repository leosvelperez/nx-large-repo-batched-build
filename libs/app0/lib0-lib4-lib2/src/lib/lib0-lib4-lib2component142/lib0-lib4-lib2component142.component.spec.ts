import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2component142Component } from './lib0-lib4-lib2component142.component';

describe('Lib0Lib4Lib2component142Component', () => {
  let component: Lib0Lib4Lib2component142Component;
  let fixture: ComponentFixture<Lib0Lib4Lib2component142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2component142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2component142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
