import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1component144Component } from './lib0-lib2-lib1component144.component';

describe('Lib0Lib2Lib1component144Component', () => {
  let component: Lib0Lib2Lib1component144Component;
  let fixture: ComponentFixture<Lib0Lib2Lib1component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
