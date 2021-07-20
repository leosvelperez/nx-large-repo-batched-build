import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component160Component } from './lib2component160.component';

describe('Lib2component160Component', () => {
  let component: Lib2component160Component;
  let fixture: ComponentFixture<Lib2component160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
