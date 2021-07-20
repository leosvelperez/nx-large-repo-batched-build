import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component42Component } from './lib2component42.component';

describe('Lib2component42Component', () => {
  let component: Lib2component42Component;
  let fixture: ComponentFixture<Lib2component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
