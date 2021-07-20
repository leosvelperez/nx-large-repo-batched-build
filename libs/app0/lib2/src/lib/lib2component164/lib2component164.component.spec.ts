import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component164Component } from './lib2component164.component';

describe('Lib2component164Component', () => {
  let component: Lib2component164Component;
  let fixture: ComponentFixture<Lib2component164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
