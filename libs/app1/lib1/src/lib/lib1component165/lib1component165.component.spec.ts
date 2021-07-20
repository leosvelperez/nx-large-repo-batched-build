import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component165Component } from './lib1component165.component';

describe('Lib1component165Component', () => {
  let component: Lib1component165Component;
  let fixture: ComponentFixture<Lib1component165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
