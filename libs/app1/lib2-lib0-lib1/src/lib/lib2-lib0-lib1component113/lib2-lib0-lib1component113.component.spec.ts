import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component113Component } from './lib2-lib0-lib1component113.component';

describe('Lib2Lib0Lib1component113Component', () => {
  let component: Lib2Lib0Lib1component113Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
