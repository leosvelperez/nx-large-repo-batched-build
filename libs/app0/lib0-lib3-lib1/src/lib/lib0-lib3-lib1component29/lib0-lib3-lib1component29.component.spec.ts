import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib1component29Component } from './lib0-lib3-lib1component29.component';

describe('Lib0Lib3Lib1component29Component', () => {
  let component: Lib0Lib3Lib1component29Component;
  let fixture: ComponentFixture<Lib0Lib3Lib1component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib1component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
