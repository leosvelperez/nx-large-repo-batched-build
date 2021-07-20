import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component184Component } from './lib1component184.component';

describe('Lib1component184Component', () => {
  let component: Lib1component184Component;
  let fixture: ComponentFixture<Lib1component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
