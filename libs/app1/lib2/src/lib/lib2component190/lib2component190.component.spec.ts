import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component190Component } from './lib2component190.component';

describe('Lib2component190Component', () => {
  let component: Lib2component190Component;
  let fixture: ComponentFixture<Lib2component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
