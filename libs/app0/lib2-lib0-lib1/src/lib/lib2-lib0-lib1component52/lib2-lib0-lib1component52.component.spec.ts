import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component52Component } from './lib2-lib0-lib1component52.component';

describe('Lib2Lib0Lib1component52Component', () => {
  let component: Lib2Lib0Lib1component52Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
