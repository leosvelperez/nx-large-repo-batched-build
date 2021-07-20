import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component93Component } from './lib2component93.component';

describe('Lib2component93Component', () => {
  let component: Lib2component93Component;
  let fixture: ComponentFixture<Lib2component93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
