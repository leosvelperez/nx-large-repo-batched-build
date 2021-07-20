import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component197Component } from './lib1component197.component';

describe('Lib1component197Component', () => {
  let component: Lib1component197Component;
  let fixture: ComponentFixture<Lib1component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
