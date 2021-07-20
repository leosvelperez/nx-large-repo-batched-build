import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component114Component } from './lib2component114.component';

describe('Lib2component114Component', () => {
  let component: Lib2component114Component;
  let fixture: ComponentFixture<Lib2component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
