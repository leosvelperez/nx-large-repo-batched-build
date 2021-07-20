import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component177Component } from './lib1component177.component';

describe('Lib1component177Component', () => {
  let component: Lib1component177Component;
  let fixture: ComponentFixture<Lib1component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
