import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4component172Component } from './lib0-lib4component172.component';

describe('Lib0Lib4component172Component', () => {
  let component: Lib0Lib4component172Component;
  let fixture: ComponentFixture<Lib0Lib4component172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4component172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4component172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
