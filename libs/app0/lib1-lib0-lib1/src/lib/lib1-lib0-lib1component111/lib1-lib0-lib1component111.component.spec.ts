import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component111Component } from './lib1-lib0-lib1component111.component';

describe('Lib1Lib0Lib1component111Component', () => {
  let component: Lib1Lib0Lib1component111Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
