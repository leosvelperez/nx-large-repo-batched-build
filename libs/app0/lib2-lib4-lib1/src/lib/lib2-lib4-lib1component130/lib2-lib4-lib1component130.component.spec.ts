import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component130Component } from './lib2-lib4-lib1component130.component';

describe('Lib2Lib4Lib1component130Component', () => {
  let component: Lib2Lib4Lib1component130Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component130Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
