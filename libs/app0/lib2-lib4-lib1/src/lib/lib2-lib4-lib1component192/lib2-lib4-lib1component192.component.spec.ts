import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component192Component } from './lib2-lib4-lib1component192.component';

describe('Lib2Lib4Lib1component192Component', () => {
  let component: Lib2Lib4Lib1component192Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});