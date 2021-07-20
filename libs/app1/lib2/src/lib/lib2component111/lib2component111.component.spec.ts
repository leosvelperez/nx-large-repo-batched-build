import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component111Component } from './lib2component111.component';

describe('Lib2component111Component', () => {
  let component: Lib2component111Component;
  let fixture: ComponentFixture<Lib2component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
