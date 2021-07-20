import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component195Component } from './lib1-lib0component195.component';

describe('Lib1Lib0component195Component', () => {
  let component: Lib1Lib0component195Component;
  let fixture: ComponentFixture<Lib1Lib0component195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component195Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
