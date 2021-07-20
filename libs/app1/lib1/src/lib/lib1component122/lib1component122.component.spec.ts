import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component122Component } from './lib1component122.component';

describe('Lib1component122Component', () => {
  let component: Lib1component122Component;
  let fixture: ComponentFixture<Lib1component122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
