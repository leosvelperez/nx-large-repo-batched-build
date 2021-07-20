import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib4parentComponent } from './lib2-lib0-lib4parent.component';

describe('Lib2Lib0Lib4parentComponent', () => {
  let component: Lib2Lib0Lib4parentComponent;
  let fixture: ComponentFixture<Lib2Lib0Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
