import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1component84Component } from './lib0-lib2-lib1component84.component';

describe('Lib0Lib2Lib1component84Component', () => {
  let component: Lib0Lib2Lib1component84Component;
  let fixture: ComponentFixture<Lib0Lib2Lib1component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});