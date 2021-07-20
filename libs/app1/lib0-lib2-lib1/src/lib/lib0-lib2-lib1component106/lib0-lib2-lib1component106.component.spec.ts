import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1component106Component } from './lib0-lib2-lib1component106.component';

describe('Lib0Lib2Lib1component106Component', () => {
  let component: Lib0Lib2Lib1component106Component;
  let fixture: ComponentFixture<Lib0Lib2Lib1component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1component106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
