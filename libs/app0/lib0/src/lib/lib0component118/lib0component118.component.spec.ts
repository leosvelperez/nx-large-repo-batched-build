import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component118Component } from './lib0component118.component';

describe('Lib0component118Component', () => {
  let component: Lib0component118Component;
  let fixture: ComponentFixture<Lib0component118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
