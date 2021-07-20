import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component6Component } from './lib2-lib4-lib2component6.component';

describe('Lib2Lib4Lib2component6Component', () => {
  let component: Lib2Lib4Lib2component6Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
