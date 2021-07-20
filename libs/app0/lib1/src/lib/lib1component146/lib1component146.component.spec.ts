import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component146Component } from './lib1component146.component';

describe('Lib1component146Component', () => {
  let component: Lib1component146Component;
  let fixture: ComponentFixture<Lib1component146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
