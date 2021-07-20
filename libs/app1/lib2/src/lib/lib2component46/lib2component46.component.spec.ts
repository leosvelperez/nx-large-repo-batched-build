import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component46Component } from './lib2component46.component';

describe('Lib2component46Component', () => {
  let component: Lib2component46Component;
  let fixture: ComponentFixture<Lib2component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
