import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component162Component } from './lib0-lib1-lib1component162.component';

describe('Lib0Lib1Lib1component162Component', () => {
  let component: Lib0Lib1Lib1component162Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
