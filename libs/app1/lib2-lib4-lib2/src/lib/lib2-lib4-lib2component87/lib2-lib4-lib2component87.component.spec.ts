import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component87Component } from './lib2-lib4-lib2component87.component';

describe('Lib2Lib4Lib2component87Component', () => {
  let component: Lib2Lib4Lib2component87Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
