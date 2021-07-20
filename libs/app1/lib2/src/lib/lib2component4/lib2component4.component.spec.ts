import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component4Component } from './lib2component4.component';

describe('Lib2component4Component', () => {
  let component: Lib2component4Component;
  let fixture: ComponentFixture<Lib2component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
