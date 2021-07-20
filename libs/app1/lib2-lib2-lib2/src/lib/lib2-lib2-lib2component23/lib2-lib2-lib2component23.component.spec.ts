import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component23Component } from './lib2-lib2-lib2component23.component';

describe('Lib2Lib2Lib2component23Component', () => {
  let component: Lib2Lib2Lib2component23Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
