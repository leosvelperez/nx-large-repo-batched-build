import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component163Component } from './lib1component163.component';

describe('Lib1component163Component', () => {
  let component: Lib1component163Component;
  let fixture: ComponentFixture<Lib1component163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
