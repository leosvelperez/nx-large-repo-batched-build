import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib1component119Component } from './lib2-lib2-lib1component119.component';

describe('Lib2Lib2Lib1component119Component', () => {
  let component: Lib2Lib2Lib1component119Component;
  let fixture: ComponentFixture<Lib2Lib2Lib1component119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib1component119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib1component119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
