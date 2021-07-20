import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component25Component } from './lib1-lib4-lib2component25.component';

describe('Lib1Lib4Lib2component25Component', () => {
  let component: Lib1Lib4Lib2component25Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
