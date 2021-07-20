import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component68Component } from './lib0-lib3component68.component';

describe('Lib0Lib3component68Component', () => {
  let component: Lib0Lib3component68Component;
  let fixture: ComponentFixture<Lib0Lib3component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
