import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component148Component } from './lib2component148.component';

describe('Lib2component148Component', () => {
  let component: Lib2component148Component;
  let fixture: ComponentFixture<Lib2component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
