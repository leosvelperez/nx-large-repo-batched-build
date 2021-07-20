import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component121Component } from './lib0component121.component';

describe('Lib0component121Component', () => {
  let component: Lib0component121Component;
  let fixture: ComponentFixture<Lib0component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
