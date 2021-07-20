import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component127Component } from './lib0-lib3-lib1component127.component';

describe('Lib0Lib3Lib1component127Component', () => {
  let component: Lib0Lib3Lib1component127Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
