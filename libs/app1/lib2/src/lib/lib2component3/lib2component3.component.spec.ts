import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component3Component } from './lib2component3.component';

describe('Lib2component3Component', () => {
  let component: Lib2component3Component;
  let fixture: ComponentFixture<Lib2component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
