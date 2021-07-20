import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component43Component } from './lib2component43.component';

describe('Lib2component43Component', () => {
  let component: Lib2component43Component;
  let fixture: ComponentFixture<Lib2component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
