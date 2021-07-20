import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component154Component } from './lib1-lib4-lib2component154.component';

describe('Lib1Lib4Lib2component154Component', () => {
  let component: Lib1Lib4Lib2component154Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
