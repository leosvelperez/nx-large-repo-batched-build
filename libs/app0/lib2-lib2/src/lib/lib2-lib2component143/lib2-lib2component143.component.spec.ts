import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component143Component } from './lib2-lib2component143.component';

describe('Lib2Lib2component143Component', () => {
  let component: Lib2Lib2component143Component;
  let fixture: ComponentFixture<Lib2Lib2component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
