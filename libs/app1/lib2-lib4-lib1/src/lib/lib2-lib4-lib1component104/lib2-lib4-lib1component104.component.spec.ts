import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component104Component } from './lib2-lib4-lib1component104.component';

describe('Lib2Lib4Lib1component104Component', () => {
  let component: Lib2Lib4Lib1component104Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
