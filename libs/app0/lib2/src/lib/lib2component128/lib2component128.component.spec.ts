import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component128Component } from './lib2component128.component';

describe('Lib2component128Component', () => {
  let component: Lib2component128Component;
  let fixture: ComponentFixture<Lib2component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
