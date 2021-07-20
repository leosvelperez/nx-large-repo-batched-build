import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component17Component } from './lib2component17.component';

describe('Lib2component17Component', () => {
  let component: Lib2component17Component;
  let fixture: ComponentFixture<Lib2component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
