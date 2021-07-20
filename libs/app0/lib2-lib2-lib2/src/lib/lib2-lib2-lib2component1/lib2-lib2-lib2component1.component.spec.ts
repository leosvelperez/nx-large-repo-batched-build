import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component1Component } from './lib2-lib2-lib2component1.component';

describe('Lib2Lib2Lib2component1Component', () => {
  let component: Lib2Lib2Lib2component1Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
