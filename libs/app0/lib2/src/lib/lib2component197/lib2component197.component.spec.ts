import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component197Component } from './lib2component197.component';

describe('Lib2component197Component', () => {
  let component: Lib2component197Component;
  let fixture: ComponentFixture<Lib2component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
