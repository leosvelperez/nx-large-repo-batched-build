import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component185Component } from './lib1component185.component';

describe('Lib1component185Component', () => {
  let component: Lib1component185Component;
  let fixture: ComponentFixture<Lib1component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
