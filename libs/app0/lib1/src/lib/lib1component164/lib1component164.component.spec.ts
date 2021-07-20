import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component164Component } from './lib1component164.component';

describe('Lib1component164Component', () => {
  let component: Lib1component164Component;
  let fixture: ComponentFixture<Lib1component164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
