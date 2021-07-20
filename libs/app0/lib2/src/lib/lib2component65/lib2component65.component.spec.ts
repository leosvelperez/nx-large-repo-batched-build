import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component65Component } from './lib2component65.component';

describe('Lib2component65Component', () => {
  let component: Lib2component65Component;
  let fixture: ComponentFixture<Lib2component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
