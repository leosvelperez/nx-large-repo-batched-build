import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib3parentComponent } from './lib0-lib4-lib3parent.component';

describe('Lib0Lib4Lib3parentComponent', () => {
  let component: Lib0Lib4Lib3parentComponent;
  let fixture: ComponentFixture<Lib0Lib4Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
