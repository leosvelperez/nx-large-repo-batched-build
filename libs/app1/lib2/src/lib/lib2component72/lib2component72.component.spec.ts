import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component72Component } from './lib2component72.component';

describe('Lib2component72Component', () => {
  let component: Lib2component72Component;
  let fixture: ComponentFixture<Lib2component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});