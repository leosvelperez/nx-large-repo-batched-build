import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component85Component } from './lib2-lib4-lib2component85.component';

describe('Lib2Lib4Lib2component85Component', () => {
  let component: Lib2Lib4Lib2component85Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
