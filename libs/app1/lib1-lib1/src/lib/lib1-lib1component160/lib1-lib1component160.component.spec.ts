import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component160Component } from './lib1-lib1component160.component';

describe('Lib1Lib1component160Component', () => {
  let component: Lib1Lib1component160Component;
  let fixture: ComponentFixture<Lib1Lib1component160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});