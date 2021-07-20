import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component127Component } from './lib0-lib1component127.component';

describe('Lib0Lib1component127Component', () => {
  let component: Lib0Lib1component127Component;
  let fixture: ComponentFixture<Lib0Lib1component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
