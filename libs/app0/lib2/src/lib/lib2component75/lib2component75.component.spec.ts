import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component75Component } from './lib2component75.component';

describe('Lib2component75Component', () => {
  let component: Lib2component75Component;
  let fixture: ComponentFixture<Lib2component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
