import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib4component110Component } from './lib0-lib4-lib4component110.component';

describe('Lib0Lib4Lib4component110Component', () => {
  let component: Lib0Lib4Lib4component110Component;
  let fixture: ComponentFixture<Lib0Lib4Lib4component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib4component110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib4component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
