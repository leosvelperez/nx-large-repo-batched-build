import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component111Component } from './lib0component111.component';

describe('Lib0component111Component', () => {
  let component: Lib0component111Component;
  let fixture: ComponentFixture<Lib0component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
