import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component110Component } from './lib0-lib0component110.component';

describe('Lib0Lib0component110Component', () => {
  let component: Lib0Lib0component110Component;
  let fixture: ComponentFixture<Lib0Lib0component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
