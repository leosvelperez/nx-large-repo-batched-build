import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component55Component } from './lib2component55.component';

describe('Lib2component55Component', () => {
  let component: Lib2component55Component;
  let fixture: ComponentFixture<Lib2component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
