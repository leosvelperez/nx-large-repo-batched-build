import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component150Component } from './lib1-lib1-lib1component150.component';

describe('Lib1Lib1Lib1component150Component', () => {
  let component: Lib1Lib1Lib1component150Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
