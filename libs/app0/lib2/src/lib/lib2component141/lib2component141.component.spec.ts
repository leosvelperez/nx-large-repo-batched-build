import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component141Component } from './lib2component141.component';

describe('Lib2component141Component', () => {
  let component: Lib2component141Component;
  let fixture: ComponentFixture<Lib2component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
