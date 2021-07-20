import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib4parentComponent } from './lib2-lib1-lib4parent.component';

describe('Lib2Lib1Lib4parentComponent', () => {
  let component: Lib2Lib1Lib4parentComponent;
  let fixture: ComponentFixture<Lib2Lib1Lib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
