import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component96Component } from './lib2component96.component';

describe('Lib2component96Component', () => {
  let component: Lib2component96Component;
  let fixture: ComponentFixture<Lib2component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
