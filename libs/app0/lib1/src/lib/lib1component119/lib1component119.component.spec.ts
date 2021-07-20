import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component119Component } from './lib1component119.component';

describe('Lib1component119Component', () => {
  let component: Lib1component119Component;
  let fixture: ComponentFixture<Lib1component119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
