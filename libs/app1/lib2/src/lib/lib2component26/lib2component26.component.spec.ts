import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component26Component } from './lib2component26.component';

describe('Lib2component26Component', () => {
  let component: Lib2component26Component;
  let fixture: ComponentFixture<Lib2component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
