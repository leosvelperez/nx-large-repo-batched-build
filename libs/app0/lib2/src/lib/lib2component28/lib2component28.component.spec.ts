import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component28Component } from './lib2component28.component';

describe('Lib2component28Component', () => {
  let component: Lib2component28Component;
  let fixture: ComponentFixture<Lib2component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
