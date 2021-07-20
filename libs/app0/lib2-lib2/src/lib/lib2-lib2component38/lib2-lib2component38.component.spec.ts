import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component38Component } from './lib2-lib2component38.component';

describe('Lib2Lib2component38Component', () => {
  let component: Lib2Lib2component38Component;
  let fixture: ComponentFixture<Lib2Lib2component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
