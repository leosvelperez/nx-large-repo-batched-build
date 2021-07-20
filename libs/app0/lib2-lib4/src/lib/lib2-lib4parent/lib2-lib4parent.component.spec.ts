import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4parentComponent } from './lib2-lib4parent.component';

describe('Lib2Lib4parentComponent', () => {
  let component: Lib2Lib4parentComponent;
  let fixture: ComponentFixture<Lib2Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
