import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component134Component } from './lib1component134.component';

describe('Lib1component134Component', () => {
  let component: Lib1component134Component;
  let fixture: ComponentFixture<Lib1component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});