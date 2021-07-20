import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component1Component } from './lib2component1.component';

describe('Lib2component1Component', () => {
  let component: Lib2component1Component;
  let fixture: ComponentFixture<Lib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
