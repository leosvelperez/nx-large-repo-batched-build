import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component170Component } from './lib0-lib2component170.component';

describe('Lib0Lib2component170Component', () => {
  let component: Lib0Lib2component170Component;
  let fixture: ComponentFixture<Lib0Lib2component170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
