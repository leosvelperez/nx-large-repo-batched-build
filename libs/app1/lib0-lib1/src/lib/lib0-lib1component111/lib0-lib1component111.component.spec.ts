import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component111Component } from './lib0-lib1component111.component';

describe('Lib0Lib1component111Component', () => {
  let component: Lib0Lib1component111Component;
  let fixture: ComponentFixture<Lib0Lib1component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
