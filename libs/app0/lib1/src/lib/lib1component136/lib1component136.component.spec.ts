import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component136Component } from './lib1component136.component';

describe('Lib1component136Component', () => {
  let component: Lib1component136Component;
  let fixture: ComponentFixture<Lib1component136Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component136Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
