import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component68Component } from './lib2-lib1-lib2component68.component';

describe('Lib2Lib1Lib2component68Component', () => {
  let component: Lib2Lib1Lib2component68Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
