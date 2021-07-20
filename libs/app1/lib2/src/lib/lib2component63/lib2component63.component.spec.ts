import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component63Component } from './lib2component63.component';

describe('Lib2component63Component', () => {
  let component: Lib2component63Component;
  let fixture: ComponentFixture<Lib2component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
