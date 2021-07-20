import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component104Component } from './lib1-lib1component104.component';

describe('Lib1Lib1component104Component', () => {
  let component: Lib1Lib1component104Component;
  let fixture: ComponentFixture<Lib1Lib1component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
