import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0parentComponent } from './lib2-lib0parent.component';

describe('Lib2Lib0parentComponent', () => {
  let component: Lib2Lib0parentComponent;
  let fixture: ComponentFixture<Lib2Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
