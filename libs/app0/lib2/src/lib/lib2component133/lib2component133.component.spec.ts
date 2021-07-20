import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component133Component } from './lib2component133.component';

describe('Lib2component133Component', () => {
  let component: Lib2component133Component;
  let fixture: ComponentFixture<Lib2component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
