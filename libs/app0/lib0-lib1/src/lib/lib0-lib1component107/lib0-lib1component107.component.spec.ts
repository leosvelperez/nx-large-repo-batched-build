import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component107Component } from './lib0-lib1component107.component';

describe('Lib0Lib1component107Component', () => {
  let component: Lib0Lib1component107Component;
  let fixture: ComponentFixture<Lib0Lib1component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
