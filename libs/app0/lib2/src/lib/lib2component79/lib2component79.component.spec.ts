import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component79Component } from './lib2component79.component';

describe('Lib2component79Component', () => {
  let component: Lib2component79Component;
  let fixture: ComponentFixture<Lib2component79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
