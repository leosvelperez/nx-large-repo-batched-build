import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component154Component } from './lib0-lib3-lib1component154.component';

describe('Lib0Lib3Lib1component154Component', () => {
  let component: Lib0Lib3Lib1component154Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});