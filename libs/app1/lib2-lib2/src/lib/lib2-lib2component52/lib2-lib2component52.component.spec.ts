import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component52Component } from './lib2-lib2component52.component';

describe('Lib2Lib2component52Component', () => {
  let component: Lib2Lib2component52Component;
  let fixture: ComponentFixture<Lib2Lib2component52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});