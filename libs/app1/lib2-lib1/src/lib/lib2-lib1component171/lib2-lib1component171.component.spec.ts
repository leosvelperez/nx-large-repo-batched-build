import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component171Component } from './lib2-lib1component171.component';

describe('Lib2Lib1component171Component', () => {
  let component: Lib2Lib1component171Component;
  let fixture: ComponentFixture<Lib2Lib1component171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});