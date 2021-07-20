import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component118Component } from './lib2component118.component';

describe('Lib2component118Component', () => {
  let component: Lib2component118Component;
  let fixture: ComponentFixture<Lib2component118Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component118Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
