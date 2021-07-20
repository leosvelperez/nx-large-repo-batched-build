import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component159Component } from './lib2component159.component';

describe('Lib2component159Component', () => {
  let component: Lib2component159Component;
  let fixture: ComponentFixture<Lib2component159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
