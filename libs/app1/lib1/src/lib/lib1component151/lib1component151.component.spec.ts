import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component151Component } from './lib1component151.component';

describe('Lib1component151Component', () => {
  let component: Lib1component151Component;
  let fixture: ComponentFixture<Lib1component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
