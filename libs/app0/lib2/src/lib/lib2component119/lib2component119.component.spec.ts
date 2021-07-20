import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component119Component } from './lib2component119.component';

describe('Lib2component119Component', () => {
  let component: Lib2component119Component;
  let fixture: ComponentFixture<Lib2component119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
