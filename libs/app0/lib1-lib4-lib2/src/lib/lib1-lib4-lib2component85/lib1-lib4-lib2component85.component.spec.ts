import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component85Component } from './lib1-lib4-lib2component85.component';

describe('Lib1Lib4Lib2component85Component', () => {
  let component: Lib1Lib4Lib2component85Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
