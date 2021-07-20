import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component170Component } from './lib1component170.component';

describe('Lib1component170Component', () => {
  let component: Lib1component170Component;
  let fixture: ComponentFixture<Lib1component170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
