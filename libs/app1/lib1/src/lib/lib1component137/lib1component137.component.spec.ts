import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component137Component } from './lib1component137.component';

describe('Lib1component137Component', () => {
  let component: Lib1component137Component;
  let fixture: ComponentFixture<Lib1component137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});