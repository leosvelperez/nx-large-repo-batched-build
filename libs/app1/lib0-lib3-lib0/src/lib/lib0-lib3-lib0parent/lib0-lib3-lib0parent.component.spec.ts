import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib0parentComponent } from './lib0-lib3-lib0parent.component';

describe('Lib0Lib3Lib0parentComponent', () => {
  let component: Lib0Lib3Lib0parentComponent;
  let fixture: ComponentFixture<Lib0Lib3Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
