import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component189Component } from './lib2component189.component';

describe('Lib2component189Component', () => {
  let component: Lib2component189Component;
  let fixture: ComponentFixture<Lib2component189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
