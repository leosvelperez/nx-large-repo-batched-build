import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component141Component } from './lib0component141.component';

describe('Lib0component141Component', () => {
  let component: Lib0component141Component;
  let fixture: ComponentFixture<Lib0component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
