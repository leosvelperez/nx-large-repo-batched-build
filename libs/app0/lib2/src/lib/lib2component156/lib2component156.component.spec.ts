import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component156Component } from './lib2component156.component';

describe('Lib2component156Component', () => {
  let component: Lib2component156Component;
  let fixture: ComponentFixture<Lib2component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
