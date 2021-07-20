import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component172Component } from './lib0component172.component';

describe('Lib0component172Component', () => {
  let component: Lib0component172Component;
  let fixture: ComponentFixture<Lib0component172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
