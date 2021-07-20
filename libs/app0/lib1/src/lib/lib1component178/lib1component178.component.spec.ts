import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component178Component } from './lib1component178.component';

describe('Lib1component178Component', () => {
  let component: Lib1component178Component;
  let fixture: ComponentFixture<Lib1component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
