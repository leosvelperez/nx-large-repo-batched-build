import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component14Component } from './lib2component14.component';

describe('Lib2component14Component', () => {
  let component: Lib2component14Component;
  let fixture: ComponentFixture<Lib2component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
