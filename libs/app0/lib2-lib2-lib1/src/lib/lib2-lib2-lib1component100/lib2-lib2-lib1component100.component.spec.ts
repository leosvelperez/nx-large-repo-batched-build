import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib1component100Component } from './lib2-lib2-lib1component100.component';

describe('Lib2Lib2Lib1component100Component', () => {
  let component: Lib2Lib2Lib1component100Component;
  let fixture: ComponentFixture<Lib2Lib2Lib1component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib1component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib1component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
