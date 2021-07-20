import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component114Component } from './lib0-lib1component114.component';

describe('Lib0Lib1component114Component', () => {
  let component: Lib0Lib1component114Component;
  let fixture: ComponentFixture<Lib0Lib1component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
