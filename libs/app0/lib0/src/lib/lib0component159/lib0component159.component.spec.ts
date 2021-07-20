import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component159Component } from './lib0component159.component';

describe('Lib0component159Component', () => {
  let component: Lib0component159Component;
  let fixture: ComponentFixture<Lib0component159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
