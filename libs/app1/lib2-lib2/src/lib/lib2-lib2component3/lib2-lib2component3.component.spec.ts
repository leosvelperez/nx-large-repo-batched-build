import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component3Component } from './lib2-lib2component3.component';

describe('Lib2Lib2component3Component', () => {
  let component: Lib2Lib2component3Component;
  let fixture: ComponentFixture<Lib2Lib2component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});