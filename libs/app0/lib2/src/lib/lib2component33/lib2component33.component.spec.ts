import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component33Component } from './lib2component33.component';

describe('Lib2component33Component', () => {
  let component: Lib2component33Component;
  let fixture: ComponentFixture<Lib2component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
