import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component132Component } from './lib1-lib1component132.component';

describe('Lib1Lib1component132Component', () => {
  let component: Lib1Lib1component132Component;
  let fixture: ComponentFixture<Lib1Lib1component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
