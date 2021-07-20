import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component140Component } from './lib1component140.component';

describe('Lib1component140Component', () => {
  let component: Lib1component140Component;
  let fixture: ComponentFixture<Lib1component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
