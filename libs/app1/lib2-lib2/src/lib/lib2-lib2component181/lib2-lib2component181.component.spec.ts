import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component181Component } from './lib2-lib2component181.component';

describe('Lib2Lib2component181Component', () => {
  let component: Lib2Lib2component181Component;
  let fixture: ComponentFixture<Lib2Lib2component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
