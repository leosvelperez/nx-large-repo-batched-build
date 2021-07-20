import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component146Component } from './lib2component146.component';

describe('Lib2component146Component', () => {
  let component: Lib2component146Component;
  let fixture: ComponentFixture<Lib2component146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
