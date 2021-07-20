import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component144Component } from './lib1component144.component';

describe('Lib1component144Component', () => {
  let component: Lib1component144Component;
  let fixture: ComponentFixture<Lib1component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
