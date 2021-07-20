import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component56Component } from './lib2-lib2component56.component';

describe('Lib2Lib2component56Component', () => {
  let component: Lib2Lib2component56Component;
  let fixture: ComponentFixture<Lib2Lib2component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
