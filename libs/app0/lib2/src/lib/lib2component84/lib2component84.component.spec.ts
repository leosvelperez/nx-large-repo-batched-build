import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component84Component } from './lib2component84.component';

describe('Lib2component84Component', () => {
  let component: Lib2component84Component;
  let fixture: ComponentFixture<Lib2component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
