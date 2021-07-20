import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component30Component } from './lib0-lib2-lib2component30.component';

describe('Lib0Lib2Lib2component30Component', () => {
  let component: Lib0Lib2Lib2component30Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
