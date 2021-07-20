import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component165Component } from './lib1-lib0component165.component';

describe('Lib1Lib0component165Component', () => {
  let component: Lib1Lib0component165Component;
  let fixture: ComponentFixture<Lib1Lib0component165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
