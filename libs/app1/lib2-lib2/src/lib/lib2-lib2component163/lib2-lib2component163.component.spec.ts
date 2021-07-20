import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component163Component } from './lib2-lib2component163.component';

describe('Lib2Lib2component163Component', () => {
  let component: Lib2Lib2component163Component;
  let fixture: ComponentFixture<Lib2Lib2component163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
