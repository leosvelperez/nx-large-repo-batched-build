import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component192Component } from './lib2component192.component';

describe('Lib2component192Component', () => {
  let component: Lib2component192Component;
  let fixture: ComponentFixture<Lib2component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
