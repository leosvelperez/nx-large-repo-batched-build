import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component126Component } from './lib1component126.component';

describe('Lib1component126Component', () => {
  let component: Lib1component126Component;
  let fixture: ComponentFixture<Lib1component126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});