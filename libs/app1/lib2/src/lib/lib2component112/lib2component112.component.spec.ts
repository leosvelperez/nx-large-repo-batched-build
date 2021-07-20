import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component112Component } from './lib2component112.component';

describe('Lib2component112Component', () => {
  let component: Lib2component112Component;
  let fixture: ComponentFixture<Lib2component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
