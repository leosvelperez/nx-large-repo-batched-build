import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component121Component } from './lib2component121.component';

describe('Lib2component121Component', () => {
  let component: Lib2component121Component;
  let fixture: ComponentFixture<Lib2component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
