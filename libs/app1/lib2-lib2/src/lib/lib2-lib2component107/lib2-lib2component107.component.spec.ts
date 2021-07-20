import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component107Component } from './lib2-lib2component107.component';

describe('Lib2Lib2component107Component', () => {
  let component: Lib2Lib2component107Component;
  let fixture: ComponentFixture<Lib2Lib2component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
