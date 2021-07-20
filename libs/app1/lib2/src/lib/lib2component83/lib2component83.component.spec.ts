import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component83Component } from './lib2component83.component';

describe('Lib2component83Component', () => {
  let component: Lib2component83Component;
  let fixture: ComponentFixture<Lib2component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
