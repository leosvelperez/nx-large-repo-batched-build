import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib1component127Component } from './lib2-lib1-lib1component127.component';

describe('Lib2Lib1Lib1component127Component', () => {
  let component: Lib2Lib1Lib1component127Component;
  let fixture: ComponentFixture<Lib2Lib1Lib1component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib1component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib1component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
