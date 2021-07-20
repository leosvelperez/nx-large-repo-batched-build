import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component68Component } from './lib1-lib0-lib3component68.component';

describe('Lib1Lib0Lib3component68Component', () => {
  let component: Lib1Lib0Lib3component68Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
