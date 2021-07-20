import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component130Component } from './lib1component130.component';

describe('Lib1component130Component', () => {
  let component: Lib1component130Component;
  let fixture: ComponentFixture<Lib1component130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
