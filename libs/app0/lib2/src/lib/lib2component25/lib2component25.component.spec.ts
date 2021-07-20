import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component25Component } from './lib2component25.component';

describe('Lib2component25Component', () => {
  let component: Lib2component25Component;
  let fixture: ComponentFixture<Lib2component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
