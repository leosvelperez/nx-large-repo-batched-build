import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component138Component } from './lib1-lib3-lib0component138.component';

describe('Lib1Lib3Lib0component138Component', () => {
  let component: Lib1Lib3Lib0component138Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});