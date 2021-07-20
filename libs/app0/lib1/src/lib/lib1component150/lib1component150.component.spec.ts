import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component150Component } from './lib1component150.component';

describe('Lib1component150Component', () => {
  let component: Lib1component150Component;
  let fixture: ComponentFixture<Lib1component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
