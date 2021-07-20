import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component166Component } from './lib2component166.component';

describe('Lib2component166Component', () => {
  let component: Lib2component166Component;
  let fixture: ComponentFixture<Lib2component166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
