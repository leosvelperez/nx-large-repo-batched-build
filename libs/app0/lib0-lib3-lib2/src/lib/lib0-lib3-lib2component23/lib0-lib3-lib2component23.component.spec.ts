import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component23Component } from './lib0-lib3-lib2component23.component';

describe('Lib0Lib3Lib2component23Component', () => {
  let component: Lib0Lib3Lib2component23Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});