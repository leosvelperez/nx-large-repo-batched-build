import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component175Component } from './lib2component175.component';

describe('Lib2component175Component', () => {
  let component: Lib2component175Component;
  let fixture: ComponentFixture<Lib2component175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
