import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component111Component } from './lib1component111.component';

describe('Lib1component111Component', () => {
  let component: Lib1component111Component;
  let fixture: ComponentFixture<Lib1component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});