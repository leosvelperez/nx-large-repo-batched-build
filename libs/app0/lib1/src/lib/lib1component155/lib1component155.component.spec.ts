import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component155Component } from './lib1component155.component';

describe('Lib1component155Component', () => {
  let component: Lib1component155Component;
  let fixture: ComponentFixture<Lib1component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
