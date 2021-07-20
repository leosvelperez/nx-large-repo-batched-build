import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component192Component } from './lib2-lib2-lib2component192.component';

describe('Lib2Lib2Lib2component192Component', () => {
  let component: Lib2Lib2Lib2component192Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
