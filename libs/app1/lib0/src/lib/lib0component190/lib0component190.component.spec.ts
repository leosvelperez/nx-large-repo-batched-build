import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component190Component } from './lib0component190.component';

describe('Lib0component190Component', () => {
  let component: Lib0component190Component;
  let fixture: ComponentFixture<Lib0component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
