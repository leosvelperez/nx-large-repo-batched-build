import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component29Component } from './lib2component29.component';

describe('Lib2component29Component', () => {
  let component: Lib2component29Component;
  let fixture: ComponentFixture<Lib2component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
