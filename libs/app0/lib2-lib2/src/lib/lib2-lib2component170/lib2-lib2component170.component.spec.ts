import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component170Component } from './lib2-lib2component170.component';

describe('Lib2Lib2component170Component', () => {
  let component: Lib2Lib2component170Component;
  let fixture: ComponentFixture<Lib2Lib2component170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
