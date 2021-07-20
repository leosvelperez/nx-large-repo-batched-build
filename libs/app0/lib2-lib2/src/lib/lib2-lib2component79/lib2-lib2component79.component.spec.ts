import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component79Component } from './lib2-lib2component79.component';

describe('Lib2Lib2component79Component', () => {
  let component: Lib2Lib2component79Component;
  let fixture: ComponentFixture<Lib2Lib2component79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
