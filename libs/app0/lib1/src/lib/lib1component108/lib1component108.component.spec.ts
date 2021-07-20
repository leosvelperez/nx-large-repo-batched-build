import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component108Component } from './lib1component108.component';

describe('Lib1component108Component', () => {
  let component: Lib1component108Component;
  let fixture: ComponentFixture<Lib1component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
