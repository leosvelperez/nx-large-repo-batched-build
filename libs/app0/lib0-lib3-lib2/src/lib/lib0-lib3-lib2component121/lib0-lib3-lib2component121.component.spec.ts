import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib2component121Component } from './lib0-lib3-lib2component121.component';

describe('Lib0Lib3Lib2component121Component', () => {
  let component: Lib0Lib3Lib2component121Component;
  let fixture: ComponentFixture<Lib0Lib3Lib2component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib2component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib2component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
