import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component68Component } from './lib1-lib2-lib2component68.component';

describe('Lib1Lib2Lib2component68Component', () => {
  let component: Lib1Lib2Lib2component68Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});