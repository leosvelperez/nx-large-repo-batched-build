import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component105Component } from './lib0-lib0-lib1component105.component';

describe('Lib0Lib0Lib1component105Component', () => {
  let component: Lib0Lib0Lib1component105Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
