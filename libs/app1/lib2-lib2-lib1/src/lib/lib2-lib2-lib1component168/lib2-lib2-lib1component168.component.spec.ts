import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib1component168Component } from './lib2-lib2-lib1component168.component';

describe('Lib2Lib2Lib1component168Component', () => {
  let component: Lib2Lib2Lib1component168Component;
  let fixture: ComponentFixture<Lib2Lib2Lib1component168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib1component168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib1component168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
