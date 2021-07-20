import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component13Component } from './lib2component13.component';

describe('Lib2component13Component', () => {
  let component: Lib2component13Component;
  let fixture: ComponentFixture<Lib2component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
