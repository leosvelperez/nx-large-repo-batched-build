import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component28Component } from './lib2-lib2component28.component';

describe('Lib2Lib2component28Component', () => {
  let component: Lib2Lib2component28Component;
  let fixture: ComponentFixture<Lib2Lib2component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
