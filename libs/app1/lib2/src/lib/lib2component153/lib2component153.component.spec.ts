import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component153Component } from './lib2component153.component';

describe('Lib2component153Component', () => {
  let component: Lib2component153Component;
  let fixture: ComponentFixture<Lib2component153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
