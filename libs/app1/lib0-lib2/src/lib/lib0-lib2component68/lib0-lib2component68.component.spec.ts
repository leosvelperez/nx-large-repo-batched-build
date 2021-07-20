import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component68Component } from './lib0-lib2component68.component';

describe('Lib0Lib2component68Component', () => {
  let component: Lib0Lib2component68Component;
  let fixture: ComponentFixture<Lib0Lib2component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
