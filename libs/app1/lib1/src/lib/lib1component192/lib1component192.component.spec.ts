import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component192Component } from './lib1component192.component';

describe('Lib1component192Component', () => {
  let component: Lib1component192Component;
  let fixture: ComponentFixture<Lib1component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
