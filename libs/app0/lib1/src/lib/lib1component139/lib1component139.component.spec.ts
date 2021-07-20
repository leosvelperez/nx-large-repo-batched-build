import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component139Component } from './lib1component139.component';

describe('Lib1component139Component', () => {
  let component: Lib1component139Component;
  let fixture: ComponentFixture<Lib1component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
