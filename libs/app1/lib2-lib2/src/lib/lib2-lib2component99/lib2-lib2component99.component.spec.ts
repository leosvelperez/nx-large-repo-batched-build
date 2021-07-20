import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component99Component } from './lib2-lib2component99.component';

describe('Lib2Lib2component99Component', () => {
  let component: Lib2Lib2component99Component;
  let fixture: ComponentFixture<Lib2Lib2component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
