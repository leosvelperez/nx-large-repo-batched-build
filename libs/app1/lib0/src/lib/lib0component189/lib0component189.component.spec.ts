import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component189Component } from './lib0component189.component';

describe('Lib0component189Component', () => {
  let component: Lib0component189Component;
  let fixture: ComponentFixture<Lib0component189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
