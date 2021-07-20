import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component117Component } from './lib1component117.component';

describe('Lib1component117Component', () => {
  let component: Lib1component117Component;
  let fixture: ComponentFixture<Lib1component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
