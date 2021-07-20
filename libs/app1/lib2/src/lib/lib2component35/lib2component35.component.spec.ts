import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component35Component } from './lib2component35.component';

describe('Lib2component35Component', () => {
  let component: Lib2component35Component;
  let fixture: ComponentFixture<Lib2component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
