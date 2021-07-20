import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component180Component } from './lib2component180.component';

describe('Lib2component180Component', () => {
  let component: Lib2component180Component;
  let fixture: ComponentFixture<Lib2component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
