import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component110Component } from './lib2component110.component';

describe('Lib2component110Component', () => {
  let component: Lib2component110Component;
  let fixture: ComponentFixture<Lib2component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
