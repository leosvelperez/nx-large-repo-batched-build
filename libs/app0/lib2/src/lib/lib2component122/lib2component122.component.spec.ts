import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component122Component } from './lib2component122.component';

describe('Lib2component122Component', () => {
  let component: Lib2component122Component;
  let fixture: ComponentFixture<Lib2component122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
