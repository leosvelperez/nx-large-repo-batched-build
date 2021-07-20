import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component106Component } from './lib1component106.component';

describe('Lib1component106Component', () => {
  let component: Lib1component106Component;
  let fixture: ComponentFixture<Lib1component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
