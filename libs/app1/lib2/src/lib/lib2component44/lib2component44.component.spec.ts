import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component44Component } from './lib2component44.component';

describe('Lib2component44Component', () => {
  let component: Lib2component44Component;
  let fixture: ComponentFixture<Lib2component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
