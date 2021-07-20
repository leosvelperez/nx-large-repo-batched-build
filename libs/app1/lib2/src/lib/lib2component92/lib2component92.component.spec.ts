import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component92Component } from './lib2component92.component';

describe('Lib2component92Component', () => {
  let component: Lib2component92Component;
  let fixture: ComponentFixture<Lib2component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
