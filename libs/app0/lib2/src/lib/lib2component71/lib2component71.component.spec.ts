import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component71Component } from './lib2component71.component';

describe('Lib2component71Component', () => {
  let component: Lib2component71Component;
  let fixture: ComponentFixture<Lib2component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
