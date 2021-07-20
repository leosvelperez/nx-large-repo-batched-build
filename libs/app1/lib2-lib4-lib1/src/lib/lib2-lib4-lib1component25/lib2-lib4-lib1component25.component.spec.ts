import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component25Component } from './lib2-lib4-lib1component25.component';

describe('Lib2Lib4Lib1component25Component', () => {
  let component: Lib2Lib4Lib1component25Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
