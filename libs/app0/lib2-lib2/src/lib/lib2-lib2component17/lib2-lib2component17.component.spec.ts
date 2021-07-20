import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component17Component } from './lib2-lib2component17.component';

describe('Lib2Lib2component17Component', () => {
  let component: Lib2Lib2component17Component;
  let fixture: ComponentFixture<Lib2Lib2component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
