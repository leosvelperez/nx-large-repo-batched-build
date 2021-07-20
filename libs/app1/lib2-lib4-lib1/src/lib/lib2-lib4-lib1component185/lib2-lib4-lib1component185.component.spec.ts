import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component185Component } from './lib2-lib4-lib1component185.component';

describe('Lib2Lib4Lib1component185Component', () => {
  let component: Lib2Lib4Lib1component185Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
