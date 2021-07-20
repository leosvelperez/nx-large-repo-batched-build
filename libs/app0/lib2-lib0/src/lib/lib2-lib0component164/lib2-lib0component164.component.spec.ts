import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component164Component } from './lib2-lib0component164.component';

describe('Lib2Lib0component164Component', () => {
  let component: Lib2Lib0component164Component;
  let fixture: ComponentFixture<Lib2Lib0component164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
