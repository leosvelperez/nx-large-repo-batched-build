import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component64Component } from './lib2-lib2-lib2component64.component';

describe('Lib2Lib2Lib2component64Component', () => {
  let component: Lib2Lib2Lib2component64Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
