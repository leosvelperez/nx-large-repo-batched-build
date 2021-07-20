import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component61Component } from './lib2-lib4-lib1component61.component';

describe('Lib2Lib4Lib1component61Component', () => {
  let component: Lib2Lib4Lib1component61Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
