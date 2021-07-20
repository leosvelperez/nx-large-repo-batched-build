import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component137Component } from './lib2component137.component';

describe('Lib2component137Component', () => {
  let component: Lib2component137Component;
  let fixture: ComponentFixture<Lib2component137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
