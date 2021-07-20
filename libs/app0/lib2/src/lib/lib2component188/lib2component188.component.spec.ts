import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component188Component } from './lib2component188.component';

describe('Lib2component188Component', () => {
  let component: Lib2component188Component;
  let fixture: ComponentFixture<Lib2component188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
