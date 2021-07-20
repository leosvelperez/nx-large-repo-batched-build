import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component179Component } from './lib1component179.component';

describe('Lib1component179Component', () => {
  let component: Lib1component179Component;
  let fixture: ComponentFixture<Lib1component179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
