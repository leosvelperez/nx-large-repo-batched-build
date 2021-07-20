import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib1component16Component } from './lib2-lib1-lib1component16.component';

describe('Lib2Lib1Lib1component16Component', () => {
  let component: Lib2Lib1Lib1component16Component;
  let fixture: ComponentFixture<Lib2Lib1Lib1component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib1component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib1component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
