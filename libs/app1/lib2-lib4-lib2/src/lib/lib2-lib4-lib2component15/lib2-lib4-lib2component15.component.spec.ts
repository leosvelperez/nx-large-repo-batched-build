import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component15Component } from './lib2-lib4-lib2component15.component';

describe('Lib2Lib4Lib2component15Component', () => {
  let component: Lib2Lib4Lib2component15Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
