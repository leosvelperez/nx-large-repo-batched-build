import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component100Component } from './lib1component100.component';

describe('Lib1component100Component', () => {
  let component: Lib1component100Component;
  let fixture: ComponentFixture<Lib1component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
