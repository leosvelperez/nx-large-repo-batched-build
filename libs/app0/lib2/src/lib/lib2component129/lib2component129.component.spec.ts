import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component129Component } from './lib2component129.component';

describe('Lib2component129Component', () => {
  let component: Lib2component129Component;
  let fixture: ComponentFixture<Lib2component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
