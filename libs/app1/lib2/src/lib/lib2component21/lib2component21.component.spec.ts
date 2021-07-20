import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component21Component } from './lib2component21.component';

describe('Lib2component21Component', () => {
  let component: Lib2component21Component;
  let fixture: ComponentFixture<Lib2component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
