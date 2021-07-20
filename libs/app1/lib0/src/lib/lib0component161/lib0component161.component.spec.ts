import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component161Component } from './lib0component161.component';

describe('Lib0component161Component', () => {
  let component: Lib0component161Component;
  let fixture: ComponentFixture<Lib0component161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
