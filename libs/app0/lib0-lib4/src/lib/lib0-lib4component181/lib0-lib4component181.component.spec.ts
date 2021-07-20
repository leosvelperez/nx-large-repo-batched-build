import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component181Component } from './lib0-lib4component181.component';

describe('Lib0Lib4component181Component', () => {
  let component: Lib0Lib4component181Component;
  let fixture: ComponentFixture<Lib0Lib4component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
