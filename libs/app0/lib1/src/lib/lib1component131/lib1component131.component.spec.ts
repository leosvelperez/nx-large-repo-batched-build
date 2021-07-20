import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component131Component } from './lib1component131.component';

describe('Lib1component131Component', () => {
  let component: Lib1component131Component;
  let fixture: ComponentFixture<Lib1component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
