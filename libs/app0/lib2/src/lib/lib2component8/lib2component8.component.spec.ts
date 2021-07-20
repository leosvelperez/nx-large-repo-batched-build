import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component8Component } from './lib2component8.component';

describe('Lib2component8Component', () => {
  let component: Lib2component8Component;
  let fixture: ComponentFixture<Lib2component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
