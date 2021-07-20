import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component191Component } from './lib1component191.component';

describe('Lib1component191Component', () => {
  let component: Lib1component191Component;
  let fixture: ComponentFixture<Lib1component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
