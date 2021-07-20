import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component66Component } from './lib2component66.component';

describe('Lib2component66Component', () => {
  let component: Lib2component66Component;
  let fixture: ComponentFixture<Lib2component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
