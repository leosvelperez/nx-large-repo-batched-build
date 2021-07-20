import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component23Component } from './lib2component23.component';

describe('Lib2component23Component', () => {
  let component: Lib2component23Component;
  let fixture: ComponentFixture<Lib2component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
