import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component156Component } from './lib0-lib1component156.component';

describe('Lib0Lib1component156Component', () => {
  let component: Lib0Lib1component156Component;
  let fixture: ComponentFixture<Lib0Lib1component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
