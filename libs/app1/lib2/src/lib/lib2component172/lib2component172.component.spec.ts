import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component172Component } from './lib2component172.component';

describe('Lib2component172Component', () => {
  let component: Lib2component172Component;
  let fixture: ComponentFixture<Lib2component172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
