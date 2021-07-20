import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component123Component } from './lib1-lib1-lib1component123.component';

describe('Lib1Lib1Lib1component123Component', () => {
  let component: Lib1Lib1Lib1component123Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
