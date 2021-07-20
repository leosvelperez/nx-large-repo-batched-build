import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component112Component } from './lib0component112.component';

describe('Lib0component112Component', () => {
  let component: Lib0component112Component;
  let fixture: ComponentFixture<Lib0component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
