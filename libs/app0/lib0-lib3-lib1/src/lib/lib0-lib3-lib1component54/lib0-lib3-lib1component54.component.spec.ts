import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component54Component } from './lib0-lib3-lib1component54.component';

describe('Lib0Lib3Lib1component54Component', () => {
  let component: Lib0Lib3Lib1component54Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
