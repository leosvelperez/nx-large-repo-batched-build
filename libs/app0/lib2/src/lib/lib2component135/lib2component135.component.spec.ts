import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component135Component } from './lib2component135.component';

describe('Lib2component135Component', () => {
  let component: Lib2component135Component;
  let fixture: ComponentFixture<Lib2component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
