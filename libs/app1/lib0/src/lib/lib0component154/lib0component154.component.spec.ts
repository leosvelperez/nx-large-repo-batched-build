import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component154Component } from './lib0component154.component';

describe('Lib0component154Component', () => {
  let component: Lib0component154Component;
  let fixture: ComponentFixture<Lib0component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
