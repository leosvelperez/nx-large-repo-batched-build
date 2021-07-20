import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component135Component } from './lib0component135.component';

describe('Lib0component135Component', () => {
  let component: Lib0component135Component;
  let fixture: ComponentFixture<Lib0component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
