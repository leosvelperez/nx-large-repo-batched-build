import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component154Component } from './lib2component154.component';

describe('Lib2component154Component', () => {
  let component: Lib2component154Component;
  let fixture: ComponentFixture<Lib2component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
