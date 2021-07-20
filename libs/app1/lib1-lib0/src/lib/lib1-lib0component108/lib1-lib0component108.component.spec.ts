import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component108Component } from './lib1-lib0component108.component';

describe('Lib1Lib0component108Component', () => {
  let component: Lib1Lib0component108Component;
  let fixture: ComponentFixture<Lib1Lib0component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
