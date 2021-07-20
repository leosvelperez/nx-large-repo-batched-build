import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib4parentComponent } from './lib0-lib2-lib4parent.component';

describe('Lib0Lib2Lib4parentComponent', () => {
  let component: Lib0Lib2Lib4parentComponent;
  let fixture: ComponentFixture<Lib0Lib2Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
