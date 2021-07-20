import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component127Component } from './lib2component127.component';

describe('Lib2component127Component', () => {
  let component: Lib2component127Component;
  let fixture: ComponentFixture<Lib2component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
