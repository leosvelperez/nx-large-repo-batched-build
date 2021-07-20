import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component142Component } from './lib2component142.component';

describe('Lib2component142Component', () => {
  let component: Lib2component142Component;
  let fixture: ComponentFixture<Lib2component142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
