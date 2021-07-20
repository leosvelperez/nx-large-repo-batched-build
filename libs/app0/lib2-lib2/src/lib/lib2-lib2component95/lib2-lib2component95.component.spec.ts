import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component95Component } from './lib2-lib2component95.component';

describe('Lib2Lib2component95Component', () => {
  let component: Lib2Lib2component95Component;
  let fixture: ComponentFixture<Lib2Lib2component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
