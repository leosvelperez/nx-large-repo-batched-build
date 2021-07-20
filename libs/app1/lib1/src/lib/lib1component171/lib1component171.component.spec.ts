import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component171Component } from './lib1component171.component';

describe('Lib1component171Component', () => {
  let component: Lib1component171Component;
  let fixture: ComponentFixture<Lib1component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
