import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component16Component } from './lib2component16.component';

describe('Lib2component16Component', () => {
  let component: Lib2component16Component;
  let fixture: ComponentFixture<Lib2component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
