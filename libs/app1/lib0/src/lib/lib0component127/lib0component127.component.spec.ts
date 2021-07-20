import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component127Component } from './lib0component127.component';

describe('Lib0component127Component', () => {
  let component: Lib0component127Component;
  let fixture: ComponentFixture<Lib0component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
