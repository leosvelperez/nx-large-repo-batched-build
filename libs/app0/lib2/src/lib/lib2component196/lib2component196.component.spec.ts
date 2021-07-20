import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component196Component } from './lib2component196.component';

describe('Lib2component196Component', () => {
  let component: Lib2component196Component;
  let fixture: ComponentFixture<Lib2component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
