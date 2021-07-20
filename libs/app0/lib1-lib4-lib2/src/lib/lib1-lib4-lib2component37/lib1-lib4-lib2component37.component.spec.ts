import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component37Component } from './lib1-lib4-lib2component37.component';

describe('Lib1Lib4Lib2component37Component', () => {
  let component: Lib1Lib4Lib2component37Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
