import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component41Component } from './lib2component41.component';

describe('Lib2component41Component', () => {
  let component: Lib2component41Component;
  let fixture: ComponentFixture<Lib2component41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
