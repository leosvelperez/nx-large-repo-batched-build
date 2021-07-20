import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib1component101Component } from './lib1-lib2-lib1component101.component';

describe('Lib1Lib2Lib1component101Component', () => {
  let component: Lib1Lib2Lib1component101Component;
  let fixture: ComponentFixture<Lib1Lib2Lib1component101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib1component101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib1component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
