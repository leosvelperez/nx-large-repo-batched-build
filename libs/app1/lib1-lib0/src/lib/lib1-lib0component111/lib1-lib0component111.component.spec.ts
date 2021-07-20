import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component111Component } from './lib1-lib0component111.component';

describe('Lib1Lib0component111Component', () => {
  let component: Lib1Lib0component111Component;
  let fixture: ComponentFixture<Lib1Lib0component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
