import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component173Component } from './lib2-lib4-lib2component173.component';

describe('Lib2Lib4Lib2component173Component', () => {
  let component: Lib2Lib4Lib2component173Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
