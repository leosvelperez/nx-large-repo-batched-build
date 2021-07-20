import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1component34Component } from './lib0-lib2-lib1component34.component';

describe('Lib0Lib2Lib1component34Component', () => {
  let component: Lib0Lib2Lib1component34Component;
  let fixture: ComponentFixture<Lib0Lib2Lib1component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1component34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
