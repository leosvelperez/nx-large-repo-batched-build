import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component19Component } from './lib2component19.component';

describe('Lib2component19Component', () => {
  let component: Lib2component19Component;
  let fixture: ComponentFixture<Lib2component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
