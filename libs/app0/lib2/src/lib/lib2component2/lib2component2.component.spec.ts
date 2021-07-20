import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component2Component } from './lib2component2.component';

describe('Lib2component2Component', () => {
  let component: Lib2component2Component;
  let fixture: ComponentFixture<Lib2component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
