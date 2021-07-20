import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component120Component } from './lib1component120.component';

describe('Lib1component120Component', () => {
  let component: Lib1component120Component;
  let fixture: ComponentFixture<Lib1component120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
