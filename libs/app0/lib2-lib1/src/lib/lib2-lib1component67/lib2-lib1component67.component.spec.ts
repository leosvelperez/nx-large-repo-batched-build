import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component67Component } from './lib2-lib1component67.component';

describe('Lib2Lib1component67Component', () => {
  let component: Lib2Lib1component67Component;
  let fixture: ComponentFixture<Lib2Lib1component67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
