import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component192Component } from './lib1-lib4component192.component';

describe('Lib1Lib4component192Component', () => {
  let component: Lib1Lib4component192Component;
  let fixture: ComponentFixture<Lib1Lib4component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
