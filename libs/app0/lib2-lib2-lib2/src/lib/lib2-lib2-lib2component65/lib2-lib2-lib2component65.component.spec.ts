import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component65Component } from './lib2-lib2-lib2component65.component';

describe('Lib2Lib2Lib2component65Component', () => {
  let component: Lib2Lib2Lib2component65Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
