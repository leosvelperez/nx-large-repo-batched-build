import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component59Component } from './lib2component59.component';

describe('Lib2component59Component', () => {
  let component: Lib2component59Component;
  let fixture: ComponentFixture<Lib2component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
