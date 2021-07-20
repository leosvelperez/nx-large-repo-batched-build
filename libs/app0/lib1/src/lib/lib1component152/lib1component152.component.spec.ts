import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component152Component } from './lib1component152.component';

describe('Lib1component152Component', () => {
  let component: Lib1component152Component;
  let fixture: ComponentFixture<Lib1component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
