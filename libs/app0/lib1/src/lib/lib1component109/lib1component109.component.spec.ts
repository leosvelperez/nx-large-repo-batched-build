import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component109Component } from './lib1component109.component';

describe('Lib1component109Component', () => {
  let component: Lib1component109Component;
  let fixture: ComponentFixture<Lib1component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
