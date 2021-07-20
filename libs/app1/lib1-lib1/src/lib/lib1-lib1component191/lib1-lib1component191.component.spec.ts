import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component191Component } from './lib1-lib1component191.component';

describe('Lib1Lib1component191Component', () => {
  let component: Lib1Lib1component191Component;
  let fixture: ComponentFixture<Lib1Lib1component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
