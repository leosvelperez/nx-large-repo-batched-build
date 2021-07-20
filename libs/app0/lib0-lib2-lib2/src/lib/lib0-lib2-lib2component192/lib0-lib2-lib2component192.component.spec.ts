import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component192Component } from './lib0-lib2-lib2component192.component';

describe('Lib0Lib2Lib2component192Component', () => {
  let component: Lib0Lib2Lib2component192Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
