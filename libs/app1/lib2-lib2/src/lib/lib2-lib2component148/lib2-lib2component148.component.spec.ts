import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component148Component } from './lib2-lib2component148.component';

describe('Lib2Lib2component148Component', () => {
  let component: Lib2Lib2component148Component;
  let fixture: ComponentFixture<Lib2Lib2component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});