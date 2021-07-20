import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component30Component } from './lib2component30.component';

describe('Lib2component30Component', () => {
  let component: Lib2component30Component;
  let fixture: ComponentFixture<Lib2component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
