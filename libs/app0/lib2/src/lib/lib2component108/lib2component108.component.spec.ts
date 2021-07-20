import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component108Component } from './lib2component108.component';

describe('Lib2component108Component', () => {
  let component: Lib2component108Component;
  let fixture: ComponentFixture<Lib2component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
