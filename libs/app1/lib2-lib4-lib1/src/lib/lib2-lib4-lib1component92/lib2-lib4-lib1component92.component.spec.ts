import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component92Component } from './lib2-lib4-lib1component92.component';

describe('Lib2Lib4Lib1component92Component', () => {
  let component: Lib2Lib4Lib1component92Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
