import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component186Component } from './lib1component186.component';

describe('Lib1component186Component', () => {
  let component: Lib1component186Component;
  let fixture: ComponentFixture<Lib1component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
