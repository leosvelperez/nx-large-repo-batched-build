import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component55Component } from './lib0-lib2component55.component';

describe('Lib0Lib2component55Component', () => {
  let component: Lib0Lib2component55Component;
  let fixture: ComponentFixture<Lib0Lib2component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
